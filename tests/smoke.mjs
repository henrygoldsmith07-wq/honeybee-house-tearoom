// Zero-dependency structural smoke test: node tests/smoke.mjs
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (f) => readFileSync(join(root, f), 'utf8');
const html = read('index.html');
const checks = [];
function check(name, fn) {
  try { const detail = fn(); checks.push({ name, ok: true, detail }); }
  catch (e) { checks.push({ name, ok: false, detail: e.message }); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }

check('single h1', () => assert((html.match(/<h1\b/g) || []).length === 1, 'expected exactly one h1'));

check('unique ids', () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  assert(ids.length === new Set(ids).size, 'duplicate ids');
  return ids.length + ' ids';
});

check('internal anchors resolve', () => {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
  const missing = anchors.filter(a => !ids.has(a));
  assert(missing.length === 0, 'missing: ' + missing.join(', '));
  return anchors.length + ' anchors';
});

check('local assets exist', () => {
  const refs = new Set();
  for (const m of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) refs.add(m[1]);
  for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) m[1].split(',').forEach(s => refs.add(s.trim().split(/\s+/)[0]));
  for (const m of html.matchAll(/\bdata-full="([^"]+)"/g)) refs.add(m[1]);
  const local = [...refs].filter(r => !/^(https?:|mailto:|tel:|#|data:)/.test(r));
  const missing = local.filter(r => !existsSync(join(root, r)));
  assert(missing.length === 0, 'missing: ' + missing.join(', '));
  return local.length + ' refs';
});

check('JSON-LD parses', () => {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(blocks.length === 3, 'expected 3 blocks');
  return blocks.map(m => JSON.parse(m[1])['@type']).join(', ');
});

check('FAQ structured data covers six questions', () => {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const faq = blocks.find(o => o['@type'] === 'FAQPage');
  assert(faq && faq.mainEntity.length === 6, 'expected 6 FAQ questions');
  return faq.mainEntity.length + ' questions';
});

check('no inline style attributes', () => assert(!/\sstyle="/.test(html), 'inline style found'));

check('strict script and style sources', () => {
  const csp = (html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/) || [])[1] || '';
  assert(/default-src 'self'/.test(csp), 'default-src not self');
  assert(/script-src 'self'/.test(csp), 'script-src not self');
  assert(/style-src 'self'(?! 'unsafe-inline')/.test(csp), 'style-src allows unsafe-inline');
  assert(/img-src 'self'(?! data:)/.test(csp), 'img-src allows data: URLs');
  assert(/frame-src 'none'/.test(csp), 'external frames allowed');
  return 'self-only scripts, styles and images; no frames';
});

check('no dead reveal/parallax hooks', () => {
  const loadedCss = [...html.matchAll(/<link rel="stylesheet" href="([^"]+\.css)"/g)].map(m => m[1]);
  const css = loadedCss.map(f => read(f)).join('\n');
  for (const token of ['data-reveal', 'js-reveal', 'hero-parallax', 'basket-count']) {
    assert(!html.includes(token) && !css.includes(token), token + ' still present');
  }
  return 'none';
});

check('no dead gallery/rack hooks in markup or scripts', () => {
  const loadedJs = [...html.matchAll(/<script src="([^"]+\.js)"/g)].map(m => m[1]);
  const js = loadedJs.map(f => read(f)).join('\n');
  for (const token of ['gallery-more', 'photo-grid', 'data-rack', 'rack-add', 'visit-status']) {
    assert(!html.includes(token) && !js.includes(token), token + ' still present');
  }
  return 'none';
});

check('CSS braces balanced', () => {
  const files = readdirSync(root).filter(f => f.endsWith('.css'));
  for (const f of files) {
    const s = read(f);
    assert((s.match(/{/g) || []).length === (s.match(/}/g) || []).length, f + ' unbalanced');
  }
  return files.length + ' files';
});

check('loaded JS parses', () => {
  const files = [...html.matchAll(/<script src="([^"]+\.js)"/g)].map(m => m[1]);
  for (const f of files) execFileSync(process.execPath, ['--check', join(root, f)], { stdio: 'ignore' });
  return files.join(', ');
});

check('manifest branding', () => {
  const m = JSON.parse(read('site.webmanifest'));
  assert(m.name === 'Honeybee House Tearoom', 'name mismatch');
  return m.name + ' / ' + m.short_name;
});

check('404 page is branded and self-contained', () => {
  const p = read('404.html');
  assert(/<title>Page not found — Honeybee House Tearoom<\/title>/.test(p), 'title mismatch');
  assert((p.match(/<h1\b/g) || []).length === 1, 'expected one h1');
  assert(!/https?:\/\//.test(p) && !/<(?:script|link)[^>]+(?:src|href)=/.test(p), 'external asset found');
  assert(/name="robots" content="noindex/.test(p), 'missing noindex');
  return 'branded, no external assets, noindex';
});

check('launch indexing enabled', () => {
  assert(!/name="robots" content="noindex/.test(html), 'homepage still noindex');
  const r = read('robots.txt');
  assert(/User-agent: \*/.test(r) && /Allow: \//.test(r), 'robots.txt does not allow crawling');
  assert(!/Disallow: \//.test(r), 'robots.txt still disallows all');
  assert(/Sitemap: https:\/\/[^\s]+\/sitemap\.xml/.test(r), 'sitemap not declared');
  const s = read('sitemap.xml');
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || '';
  assert(s.includes(canonical), 'sitemap URL differs from canonical');
  return 'homepage indexable, sitemap declared and consistent';
});

check('social preview and theme are consistent', () => {
  const png = readFileSync(join(root, 'og-image.png'));
  assert(png.readUInt32BE(16) === 1200 && png.readUInt32BE(20) === 630, 'og-image.png is not 1200x630');
  const manifest = JSON.parse(read('site.webmanifest'));
  const meta = (html.match(/name="theme-color" content="([^"]+)"/) || [])[1];
  assert(manifest.theme_color === meta, 'manifest theme_color differs from meta theme-color');
  assert(manifest.background_color === meta, 'manifest background_color differs from theme');
  const source = read('assets/share-source.html');
  assert(source.includes('#3c5a48') && !/#315d78|#315e7b/.test(source), 'share illustration still uses the old blue palette');
  return '1200x630 image; theme #' + meta.slice(1) + '; green illustration';
});

check('unreferenced source modules removed', () => {
  for (const f of ['direction.css', 'visit-collection.css', 'visit-collection.js']) {
    assert(!existsSync(join(root, f)), f + ' still present');
  }
  return '3 modules removed';
});

let failed = 0;
for (const c of checks) {
  console.log((c.ok ? 'PASS ' : 'FAIL ') + c.name + (c.detail ? ' — ' + c.detail : ''));
  if (!c.ok) failed++;
}
console.log('\n' + (checks.length - failed) + '/' + checks.length + ' checks passed');
process.exit(failed ? 1 : 0);
