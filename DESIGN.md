# Design and public-source audit — 15 November 2026

Porcelain and tea references; older storefront photos include former Selah branding, not used as current signage.

## Applied guidance
Unslop by Damir Sokolovsky (@heydamir), CC BY 4.0: https://github.com/heydamir/unslop
Anthropic frontend-design: https://github.com/anthropics/skills/tree/main/skills/frontend-design
UI/UX Pro Max was explicitly excluded by Henry.

Inspiration: https://www.inspora.design/posts/3d-website-with-claude-code ; https://www.inspora.design/posts/portfolio-website ; https://studio.motionsites.ai/explore/vasari-vhs-hero
No template code, source photographs or commercial assets copied. Illustrations are original SVG/CSS, not inventory or premises photographs.

## Evidence
Contact details, expanded hours and coordinates were checked directly on Google Maps on 15 November 2026. Owner Instagram agrees with Maps hours and phone; Facebook About confirms email. Organiser confirms Tearoom of the Year 2026: https://oceanicawardsblog.wordpress.com/2026/03/24/winners-announced-for-the-welsh-cafe-bakery-awards-2026/

Full source URLs, dates, queries, conflicting claims and access limits are preserved in shared prospect records. Social timelines are partially login-gated; no claim of complete private/archive access. No prices, current inventory, dietary guarantees or review quotes added.

## Implementation
4px spacing rhythm, quieter navigation, sentence-case labels, one primary hero action, subject-specific composition, native form controls, touch/keyboard controls and reduced-motion support. Original booking/enquiry flows retained. Zero third-party runtime, tracking or paid dependencies.

## Verified outcomes — 15 November 2026
Browser widths: 375, 390, 768, 1440 and 1920px; no horizontal overflow. Mobile menu opens and closes on Escape. Primary hero and menu targets are at least 44px tall on 375px. CSS and JS return 200 locally; one h1, labelled fields, strict script policy and safe external links verified. Tested closed-day rejection, valid request and clearing a prepared request when inputs change. No email or phone call initiated.

Not verified: Safari/Firefox, Lighthouse score, formal WCAG certification, complete social archives, real phone answer, owner acceptance or actual payments. GitHub Pages remains disabled; candidate canonical URLs need final launch configuration.

## Experience refinement — 15 November 2026
Kept the approved identity and verified business facts. Added locally hosted DM Sans/Fraunces Latin WOFF2 fonts with SIL OFL licenses from the official Google Fonts repository, richer original material illustrations, more intentional typography, and clearer interactions. No Google font/CDN requests occur at runtime. The web app still uses vanilla HTML/CSS/JavaScript with no runtime packages. Fonts total about 130 KB per site. No source photographs or generated paid imagery used.
## Final polish — 15 November 2026
Scroll-reveal section entrances (IntersectionObserver, reduced-motion safe), pointer parallax on the hero visual (fine-pointer only), Daisy shortlist-count pop feedback, and added structured data: contactPoint, hasOfferCatalog (barbers) and FAQPage schema, plus og:locale/og:site_name/twitter parity and sentence-case ribbon copy. All zero-dependency, still no pricing or unverified claims. Verified one h1, strict script policy, no overflow at 375/768/1440/1920, and keyboard/touch flows.

## 16 November 2026 — Vasari × Jiro visit collection
Applied Henry’s two supplied prompts as a scoped, additive vanilla HTML/CSS/JS section after existing content. Physical perspective covers, chapter controls, masked dialog reveal and sticky illustrated/photo column beside four numbered cards. Existing forms and content retained. Original licensed local fonts retained; no fictional film assets, PestGuard copy, invented claims, external font calls or React dependencies. Native dialog manages focus and Escape; normal anchor destinations work without JS; reduced motion disables animation. Responsive flow replaces the fixed scaled artboard to preserve readable type and zoom.
Unslop by Damir Sokolovsky (https://heydamir.design/unslop), CC BY 4.0, guided restraint and material hierarchy.
Reference: https://jiro.build/ and user-provided pasted-text.txt / pasted-text-2.txt.

Verified 16 November: structural validation, single h1, unique IDs, resolved anchors and assets, JavaScript/JSON-LD parsing. Browser tests: desktop 1920px and mobile 375px; chapter selection, arrow keys, native dialog open, Escape with focus restoration, action destinations, no document or dialog overflow; reduced-motion transition duration zero. Daisy truncated markup discovered and restored from ee23393, preserving all 13 photographs. No production payments, owner confirmation or formal accessibility audit performed.

## 16 November 2026 — integrated whole-page refinement
Henry requested improvement of all four active sites and supplied three coffee photographs. Moved the reference collection immediately after each hero, added Explore navigation, reconciled colour/type hierarchy and reduced competing gradients and glow. Daisy: distinct photographic covers, compact gallery with optional full browsing. Honeybee: supplied coffee hero/editorial photography, illustrated-image caveats and a warm cream/green palette. Graham: shop-inspired pale blue/black/gold; Best Cut: acid-yellow/forest-green with bold sans headline. Shared gallery viewer includes native dialog, arrows, Escape and focus restoration. Existing forms, source-backed contacts and noindex status preserved. No change to Imperial or public hosting.

### Henry’s correction: premium, remove tacky designs
Supersedes the decorative direction above. Removed active 3D shelf/visit collection, hero rack, clip-art hero scenes, neon palette, gradient text, glows and decorative reveal/parallax/pop effects. Chose editorial photography for Daisy/Honeybee and restrained typographic shop identity panels for the barbers; kept shortlist, filters, request forms and direct contact routes. Source modules for the earlier shelf remain in the repository but are no longer loaded.

Final checks: 16 November 2026. No horizontal overflow at 375, 768 and 1440px. Mobile menu opens and closes on Escape. Gallery expands to 13 images; native image dialog supports arrows and Escape with focus restoration. Daisy prepares a complete unsent enquiry email. Honeybee rejects Tuesday, accepts Wednesday and prepares an unsent email. Both barber service selections populate the note and prepare a complete unsent call summary. Local image dimensions reconciled to original JPEG headers to reserve layout space. Hero fonts report loaded; decorative shelves/racks/parallax absent. No formal Lighthouse/WCAG or Safari/Firefox audit. Supplied coffee photos kept as originals after Windows blocked the preparation PS1; total photos are approximately 9.4 MB, with only the 0.54 MB hero fetched eagerly.

## Premium refinement — 16 November 2026
Preserved approved identity and section order, following Unslop by Damir Sokolovsky (CC BY 4.0). Improved service-row hierarchy, selected-service feedback, form grouping, mobile spacing, safe-area clearance, FAQ targets, focus visibility and outside-click navigation dismissal. Daisy enquiry wording describes the actual unsent handoff. Local JPEG responsive derivatives preserve original assets, native lazy loading remains enabled, and gallery enlargement uses the larger derivative. No new business claims or paid services. See QA-2026-11-16.md for actual checks.

## Background-led direction — 16 November 2026
Henry requested photographs as backgrounds. Daisy and Honeybee now use the existing responsive images as full-bleed hero backdrops, with dark readability scrims and an honest illustrative-photo caption. The image remains a native responsive img behind the content rather than a CSS download so source selection and priority are preserved. Barbers have no saved shop photography: their former boxed wordmarks now form oversized decorative backgrounds across the hero, retaining their identities without implying stock photos are their premises. No new photography, factual claims, dependencies or motion.

## Navigation bridge and asset polish — 16 November 2026
Fixed a responsive gap: the collapsible menu ended at 800px but the desktop nav only started at 900px, and the fixed action bar ended at 640px. Between 641px and 899px no navigation was reachable. A scoped rule in finishing.css shows the Menu toggle from 801px to 899px, hides the redundant header CTA there, and lays out the open nav; direction.js now closes the menu at the 900px desktop breakpoint to match the CSS. Also preloaded the Fraunces display font alongside DM Sans (both are used above the fold) and gave the web app manifest the real brand name instead of the repo slug. No business details, prices, claims or dependencies changed. The earlier `direction.css`, `visit-collection.css` and `visit-collection.js` source modules remain intentionally unreferenced, as recorded above for the visit-collection files.

## Structured data and dead-motion cleanup — 16 November 2026
The FAQPage structured data now matches all five questions visitors can actually read (children and pushchairs, and nearby parking, were missing from the machine-readable copy). Removed the inert scroll-reveal/parallax/shortlist-pop code: no script ever added `js-reveal` or `is-in`, and there are no `hero-parallax` or `basket-count` elements, so five `data-reveal` attributes and their CSS were dead after the premium direction. No visible behaviour, business facts, pricing or dependencies changed.

## Audit-driven accessibility and hardening — 16 November 2026
Lighthouse on the real page found four issues, fixed here: the `aria-label` on an unroled `div` (the quick-date group now has `role="group"`), the brand link's accessible name that omitted its visible text, touch-target sizing (already handled by the 44px control rules once styles load), and low contrast. Closed-day text moved from #a89685 to #705c48 on the pale panel (6.2:1); footer body and fine print moved to #d9c9ae and #cbbca6 on the dark green (7.3:1 and 6.3:1). Measured with a relative-luminance calculation, then confirmed by a clean Lighthouse run. The six one-off inline styles were moved to classes so `style-src` no longer needs `unsafe-inline`, leaving self-only script and style sources; the dead card-rack, service and visit-status branches were removed from the shared JS because this page has none of those elements. The invalid `robots.txt` finding was a local test-server fetch timeout, not a file fault. A final pass removed the dead "Show all photographs" branch and unused variables from the shared refinement script — this page has only three coffee photographs and no `.photo-grid` — and extended `tests/smoke.mjs` to guard against those hooks returning. Page weight measured at 299 KB with the largest image at 98 KB. The CSP was tightened once more: no `data:` image URLs or iframes are used, so `img-src` is now self-only and `frame-src` is `none`. Fetching both responsive coffee photographs from the page returned HTTP 200 with the expected byte sizes after the change. The previously bare 404 page now uses the same cream/green palette and serif heading, with a 51px back link and a verified phone link; it stays self-contained, carries `noindex`, and adds no business facts.
