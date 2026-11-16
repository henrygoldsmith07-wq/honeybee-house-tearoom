# honeybee-house-tearoom

Independent zero-dependency static site for Henry Goldsmith. Open index.html via any static server. No build or paid services required.

## Functional scope
Forms prepare a visible request or call note. Email links open the visitor's email app; no message is automatically sent. A reference is local, not a server booking. No payments, confirmed bookings, delivery promises or invented prices.

## Before owner launch
Confirm contact details, hours, service/menu content and accessibility needs with the owner. Replace the candidate GitHub Pages canonical/social URLs with the actual deployment URL. Search indexing is blocked by robots.txt pending owner launch approval. Remove that block and submit sitemap.xml only at approved launch. No real merchant checkout is configured.

## Security and privacy
No third-party scripts, fonts, trackers or card handling. Executable JavaScript is self-hosted and CSP permits only self scripts. Form input is escaped or inserted as text. Gift shortlists use localStorage; visit details stay in the current tab.

Prepared 15 November 2026.

## Verification — 15 November 2026
Browser checks: 375px, 390px, 768px and 1440px widths; no horizontal overflow. Form flows exercised without sending an email or calling. All local assets, scripts, JSON-LD, single h1 and external-link protections checked. Not tested: live telephone ownership, owner acceptance, live checkout, Safari/Firefox, Lighthouse, formal WCAG certification or Google Rich Results.

## 15 November 2026: reference-led design and evidence pass
See DESIGN.md for sources, design decisions and attribution. Live Maps and publicly accessible social details were audited; full private/social archives were not accessible. Site changes use confirmed details, original code-native illustrations and keyboard/touch interaction. No client launch or payments enabled.
## Final polish — 15 November 2026
Scroll-reveal section entrances (IntersectionObserver, reduced-motion safe), pointer parallax on the hero visual (fine-pointer only), Daisy shortlist-count pop feedback, and added structured data: contactPoint, hasOfferCatalog (barbers) and FAQPage schema, plus og:locale/og:site_name/twitter parity and sentence-case ribbon copy. All zero-dependency, still no pricing or unverified claims. Verified one h1, strict script policy, no overflow at 375/768/1440/1920, and keyboard/touch flows.

## Vibrancy pass — 15 November 2026
Brand-specific vibrancy layer appended to site.css: richer gradients and section depth, gradient headline/section headings, gradient primary buttons and glowing hover/selection states. All zero-dependency; respects prefers-reduced-motion; strict CSP unchanged; one h1 retained; no unverified claims added.

## Smoke test — 16 November 2026
Run `node tests/smoke.mjs` from the repository root. No install or dependencies. It checks one h1, unique IDs, resolved internal anchors, existing local assets, three parseable JSON-LD blocks, six FAQ entries, no inline style attributes, self-only script and style CSP sources, no dead reveal/parallax or gallery/rack hooks, balanced CSS braces, parseable loaded scripts, manifest branding and a branded self-contained 404 page. 14/14 checks passed on 16 November 2026.

## Lighthouse — 16 November 2026
Local static server, desktop emulation: Accessibility 100, Best Practices 100, SEO 100. No audit failures. Browser flows exercised: Tuesday requests rejected, Wednesday requests prepare an unsent email with correct details, and the photograph dialog opens, moves focus to Close and restores focus on Escape. No email, call, payment or deployment performed.

## Launch preparation — 16 November 2026 (Henry approved)
Henry approved removing the pre-launch blocking and the unused source modules. The homepage `noindex` meta is gone; `robots.txt` now allows all crawlers and declares `sitemap.xml`; the sitemap URL matches the canonical URL. The canonical, Open Graph, Twitter and JSON-LD URLs remain the GitHub Pages deployment URL `https://henrygoldsmith07-wq.github.io/honeybee-house-tearoom/` — if Henry moves to a custom domain, those URLs must be changed together. The not-found page keeps its own `noindex`, which is normal for error pages. The unreferenced `direction.css`, `visit-collection.css` and `visit-collection.js` source modules were deleted. `node tests/smoke.mjs` now passes 16/16 including launch-indexing and module-removal checks. Contact details, hours and accessibility still need owner confirmation; no deployment or publication was performed.

## Social preview refresh — 16 November 2026
The old `og-image.png` carried stale copy ("CARDIFF WEBSITE", "Vintage Tearoom & Homemade Bakes") and an old palette. Its source page `assets/share-source.html` was updated to the current cream/green palette, then the PNG was regenerated from that source with headless Chrome at exactly 1200×630 (78 KB). The favicon and web manifest now use the same palette, and the manifest declares theme/background colours matching the page meta. `node tests/smoke.mjs` passes 17/17 with a new social-preview/theme check.
