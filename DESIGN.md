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
