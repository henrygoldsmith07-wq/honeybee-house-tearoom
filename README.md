# honeybee-house-tearoom

Independent zero-dependency static site for Henry Goldsmith. Open index.html via any static server. No build or paid services required.

## Current state — 17 November 2026

The dated sections below are a history of the work, not a description of the shipped site. The current visual system is the Hallmark Garden redesign: `tokens.css` and `base.css` hold the colour, type and spacing tokens and base rules, with `site.css`, `refinement.css`, `finishing.css` and `hero-background.css` carrying the composition. The faces are self-hosted Fraunces and DM Sans standing in for the theme's Vollkorn and Hanken. There are no gradients, scroll reveals or parallax; the earlier vibrancy and polish notes are superseded. The social card `og-image.png` is a 1200x630 honeycomb-lattice artwork of 54,808 bytes generated from `assets/share-source.html`, with its visual philosophy in `assets/CANVAS-PHILOSOPHY.md`; the older tea-set illustration note is superseded.

The booking form collects date, time, party size, visit type, name, phone and email. It prepares an unsent email in the visitor's own mail app and states plainly that nothing is sent until they open it. The header carries phone and email links on desktop, the menu carries a booking link, and the footer states that the site does no tracking and respects reduced motion.

Verified on 17 November: `node tests/smoke.mjs` 18/18; Hallmark static lint 0 FAIL and 0 WARN with 12/12 links, 8/8 original fields and 21/21 script hooks preserved; browser checks at 320, 375, 600, 1280, 1440 and 1920px with no horizontal overflow, and working menu, gallery and booking flows. Not checked: live phone ownership, owner sign-off, Safari/Firefox, formal WCAG audit or the live GitHub Pages rendering.

## Functional scope
Forms prepare a visible request or call note. Email links open the visitor's email app; no message is automatically sent. A reference is local, not a server booking. No payments, confirmed bookings, delivery promises or invented prices.

## Before owner launch
Confirm contact details, hours, service/menu content and accessibility needs with the owner. If the site moves off GitHub Pages to a custom domain, update the canonical/OG/Twitter/JSON-LD URLs together. Search indexing is already enabled (`robots.txt` allows all and declares `sitemap.xml`); submit the sitemap to search consoles when the owner is ready. No real merchant checkout is configured.

## Security and privacy
No third-party scripts, fonts, trackers or card handling. Executable JavaScript is self-hosted and the CSP permits only self scripts, styles and images, with no frames or plugins. Form input is percent-encoded in the mailto link or inserted as text; nothing is stored in browser storage and no message is sent automatically.

Prepared 15 November 2026.

## Verification — 15 November 2026
Browser checks: 375px, 390px, 768px and 1440px widths; no horizontal overflow. Form flows exercised without sending an email or calling. All local assets, scripts, JSON-LD, single h1 and external-link protections checked. Not tested: live telephone ownership, owner acceptance, live checkout, Safari/Firefox, Lighthouse, formal WCAG certification or Google Rich Results.

## 15 November 2026: reference-led design and evidence pass
See DESIGN.md for sources, design decisions and attribution. Live Maps and publicly accessible social details were audited; full private/social archives were not accessible. Site changes use confirmed details, original code-native illustrations and keyboard/touch interaction. No client launch or payments enabled.
## Final polish — 15 November 2026
Scroll-reveal section entrances (IntersectionObserver, reduced-motion safe), pointer parallax on the hero visual (fine-pointer only), and structured data: contactPoint and FAQPage schema, plus og:locale/og:site_name/twitter parity and sentence-case ribbon copy. The reveal and parallax effects and the shortlist/barber features described in early shared-pipeline notes were never part of this site's final direction and are absent from the current code. All zero-dependency, still no pricing or unverified claims. Verified one h1, strict script policy, no overflow at 375/768/1440/1920, and keyboard/touch flows.

## Vibrancy pass — 15 November 2026
Brand-specific vibrancy layer appended to site.css: richer gradients and section depth, gradient headline/section headings, gradient primary buttons and glowing hover/selection states. All zero-dependency; respects prefers-reduced-motion; strict CSP unchanged; one h1 retained; no unverified claims added.

## Smoke test — 16 November 2026
Run `node tests/smoke.mjs` from the repository root. No install or dependencies. It checks one h1, unique IDs, resolved internal anchors, existing local assets, three parseable JSON-LD blocks, FAQ data matching the visible questions and answers exactly, no inline style attributes, self-only script/style/image CSP sources with no frames or plugins, no dead reveal/parallax or gallery/rack hooks in markup or scripts, balanced CSS braces, parseable loaded scripts, manifest branding and a branded self-contained 404 page. 18/18 checks passed on 16 November 2026.

## Code and hosting hardening — 16 November 2026
Stylesheets were pruned of rule families with no references in the HTML or JavaScript (roughly 20 KB removed), verified by identical before/after screenshots at 820px and 375px and an unchanged Lighthouse score. A `_headers` file supplies `X-Frame-Options: DENY`, `nosniff`, referrer and permissions policies on hosts that support it (Netlify/Cloudflare Pages); GitHub Pages ignores such files; on 17 November 2026 Henry decided to stay on GitHub Pages, so a client-side frame guard is the working mitigation and `_headers` is kept for any future header-capable host.

## Lighthouse — 16 November 2026
Local static server, desktop emulation: Accessibility 100, Best Practices 100, SEO 100. No audit failures. Browser flows exercised: Tuesday requests rejected, Wednesday requests prepare an unsent email with correct details, and the photograph dialog opens, moves focus to Close and restores focus on Escape. No email, call, payment or deployment performed.

## Launch preparation — 16 November 2026 (Henry approved)
Henry approved removing the pre-launch blocking and the unused source modules. The homepage `noindex` meta is gone; `robots.txt` now allows all crawlers and declares `sitemap.xml`; the sitemap URL matches the canonical URL. The canonical, Open Graph, Twitter and JSON-LD URLs remain the GitHub Pages deployment URL `https://henrygoldsmith07-wq.github.io/honeybee-house-tearoom/` — if Henry moves to a custom domain, those URLs must be changed together. The not-found page keeps its own `noindex`, which is normal for error pages. The unreferenced `direction.css`, `visit-collection.css` and `visit-collection.js` source modules were deleted. `node tests/smoke.mjs` now passes 16/16 including launch-indexing and module-removal checks. Contact details, hours and accessibility still need owner confirmation; no deployment or publication was performed.

## Social preview refresh — 16 November 2026
The old `og-image.png` carried stale copy ("CARDIFF WEBSITE", "Vintage Tearoom & Homemade Bakes") and an old palette. Its source page `assets/share-source.html` was updated to the current cream/green palette, then the PNG was regenerated from that source with headless Chrome at exactly 1200×630 (78 KB). The favicon and web manifest now use the same palette, and the manifest declares theme/background colours matching the page meta. The original tea-set illustration in the source page was recoloured from blue to the site's green/gold and the PNG regenerated again at 1200×630 (78,299 bytes). The manifest now also declares 192px and 512px PNG icons rendered from the same favicon, alongside the SVG. `node tests/smoke.mjs` passes 18/18 with social-preview, palette, icon-size and theme checks.
