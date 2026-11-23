# Design QA

final result: blocked

Source visual truth: ../generated_images/exec-096c78da-6000-4e63-98e0-983bc6fba14f.png (748 × 2103 px).
Target: responsive desktop wedding page, plus mobile breakpoint at 650 CSS px.
State: initial hero, program, demo RSVP, FAQ, closing photo.

Browser verification blocked: sites-preview start and status both returned “preview relay unavailable: No such file or directory (os error 2)”. The cloud browser at the prescribed preview URL displayed “upstream connect error or disconnect/reset before headers”. No implementation screenshot or valid same-viewport comparison can be captured. No claims of visual fidelity, working browser interactions or mobile QA are made.

Required surfaces: fonts (Oswald and Cormorant Garamond) bundled and Cyrillic coverage verified; layout responsive rules implemented but unverified; palette matches specified green/cream/terracotta/lime; original photo assets used and compressed to WebP; race bib extracted from selected mock; track asset generated from reference; editable Russian UI copy implemented, unconfirmed schedule/address/contact clearly marked.

Primary interactions implemented but browser testing blocked: anchors, mobile menu, attendance conditional fields, required name, demo confirmation, FAQ.
Console error check: blocked with unavailable preview.

Intentional scope: additional agreed guest information and demo form extend the short visual concept. The race bib date and reference photos are unchanged. No Sheets connection, no deployment.

Implementation checklist: restore managed preview infrastructure; capture desktop/mobile; test primary interactions; create combined reference/implementation comparison; resolve any P0/P1/P2 findings before marking passed.

## v5 scoped revision
User reports confirmed v4 photo clipping and disconnected hero track. Removed fixed image heights, cover fitting, arch masking and photo zoom at all breakpoints. All three source photographs now use intrinsic ratio with height:auto. Added one resize-aware raster route connector anchored to hero photo bounds and one uninterrupted rail through the page. Scroll reveal uses requestAnimationFrame and remeasures through ResizeObserver, including FAQ/form height changes; reduced motion shows full route. Mobile route has a reserved content gutter.

Verification: build succeeds; raster alpha endpoints measured to align connector and rail. Browser preview remains blocked: sites-preview status returned the same missing relay infrastructure error. Joint accuracy across viewports, mobile spacing, interaction testing and console inspection require browser verification. No rendered evidence available.

final result: blocked

## v6 — corrections after user review
Removed PageRoute, full-page raster rail, connector, scroll listeners, resize measurement and special left gutters. Hero track is now a single absolute image with left:0, bottom:0, width:100% inside a viewport-wide hero; green hero contains its animation completely. Restored arched hero clipping while preserving intrinsic image height. Running and final photographs keep height:auto and object-fit:contain; both use the same cream frame treatment. Running section is a two-column editorial story on desktop and stacked on mobile. Final image and closing heading share a centered composition. All earlier v5 full-page-route conclusions are superseded.

Validation: Vite build passed. Source checks confirm PageRoute, ResizeObserver and full-page route assets are absent from rendered markup, special left gutter removed, figure markup balanced. Browser preview infrastructure still unavailable, so final rendered visual QA remains blocked. No claims of screenshot comparison or responsive browser testing.

final result: blocked

## v7 — ten-section copy, confirmed venue and RSVP redesign
User-supplied corrections are the visual/content source for this scoped revision over the approved arched design. Header simplified; arched portrait enlarged and explicitly placed left, copy right. Intro fully replaced, days/hours/minutes countdown targets Jan 5 2027 15:00 Asia/Novosibirsk (guest gathering). Running/final photos full-width at intrinsic ratio. Schedule is a semantic ordered timeline with red dashed scroll-revealed rail and confirmed times. Venue, address, map link, palette, wishes, host placeholder and final copy updated.

RSVP: separate guest component with required attendance, conditional group validation, default-visible following questions, refusal suppression, child age instead of drinks, removable unlimited companions gated by validation, transfer and common questions. Form never claims persistence while endpoint is absent. Apps Script handler prepared with validation, one row per guest, lock-protected retry deduplication, formula escaping and server acknowledgement. No live endpoint or Google spreadsheet access supplied. Cross-origin acknowledgement still needs actual deployed-service test.

Checks: eight Node tests passed (including handler against mock spreadsheet); production build passed. Actual Google write unverified. Preview relay remains missing per sites-preview status. Desktop/mobile screenshots and browser interaction/console inspection unavailable. Source screenshots have not been compared with this revision. No visual pass claimed.

final result: blocked

## v8 — desktop photo scale and RSVP visual hierarchy
Desktop-only sizing now bounds hero portrait to min(420px,48svh), and body photos to min(80vw,860px,65svh×4/3), always retaining intrinsic ratio. Mobile photo sizing unchanged. Invitation copy replaced verbatim except typographic dash. Timer now has days/hours/minutes/seconds, colon accents and a dark forest-green racing-clock panel. Updated wishes headings. RSVP date uses an inline-block nowrap accent; removed main guest heading, companions heading, written required and multiple-choice annotations. Question text enlarged, fields and checked/hover/focus states restyled. Individual added questionnaires retain a neutral number and remove control for clarity.

Validation: production build and eight RSVP tests passed, source assertions confirm new copy/seconds/deadline and removed labels. sites-preview status still reports missing preview relay. Visual comparison, desktop/mobile screenshot checks and browser form inspection remain blocked. Sheets endpoint remains unset; no live persistence claim.

final result: blocked

## v9 — smartphone viewport sizing
Header + hero use the visible small viewport (svh, vh fallback). Mobile photo width is derived from remaining vertical budget after header, text and decoration; intrinsic ratio and arch preserved. Fluid hero type, condensed spacing, compact decoration, short-portrait rules <=700px and landscape rules <=550px. Informational section spacing, invitation type, countdown, timeline and final spacing reduced on phones. Desktop composition unchanged. RSVP retains natural height for variable guest count, keyboard interaction and text readability; controls keep 16px input text and 48px choice targets.

Production build passed. Browser infrastructure is still unavailable, so screenshot-based verification at 360x640, 375x667, 390x844 and 412x915 and landscape is NOT completed. These are target viewports, not measured passing tests. Actual first-screen fit remains unverified in rendered browsers.

final result: blocked

## v10 — selected dress-code moodboard integrated
User changed scope from exploration to implementation while only «Шампанское и шалфей» was visible; this exact direction was named in the implementation update. Source image: ../generated_images/exec-c4c655b7-048c-4471-8480-e523bdbcd26e.png (1003×1568). Original board copied to public/assets/dress-board.png without repainting. Responsive nondestructive crops show fabric scene and eight labeled textile swatches. Light champagne background, three pairing hints and expandable full board with clothing examples. Existing header, mobile hero, guest form and rest of content untouched.

Production build passed. Browser screenshots/interaction checks are still unavailable: preview relay missing. Crops and responsive presentation need actual browser inspection; no visual pass claimed. Existing Sheets configuration remains unset.

final result: blocked

## v11 — requested section rhythm, timer and album
Name separators replaced in hero/finale with plain sans-serif +. Four racing-clock units now have burgundy-red backgrounds inside existing green outer board; numeric/unit labels remain readable cream. Small schedule uncertainty note added. Source ordering checked: venue → green wishes → beige dress code → green new photo album → beige RSVP. Removed pairing examples and expandable inspiration; shade-choice instruction and eight swatches preserved.

Album uses exactly the three newly attached photographs, inspected before use and saved as optimized WebP copies with orientation normalization. Originals unchanged. Slightly rotated paper-bordered prints overlap at their edges; natural-ratio photographs not cropped. Mobile row scrolls horizontally. Reduced-motion styling retains static layout.

Production build passed; source assertions passed for section ordering, plus signs, removed blocks and all album assets. Current preview relay still unavailable; browser screenshots, visual stacking and mobile scrolling unverified. Existing RSVP connection blocker unchanged.

final result: blocked

## v12 — final wishes and response spreadsheet preparation
Replaced three wishes with optional potted-plant suggestion, presence as greatest gift and forthcoming host contact for congratulations/program details. Removed separate contact section and footer slogan; retained back-to-top. Production build and eight RSVP tests passed.

Google spreadsheet provided by user opened in cloud browser with anonymous edit access. Twelve response headers were written in A1:L1 and saved, with bold first row. Apps Script menu opened Google sign-in; authentication failed with Google's visible “Wrong password” message. No script created/deployed; no live response endpoint exists, so form persistence remains disconnected. Backend now defaults to exact provided spreadsheet and its first existing sheet. User credentials never read or stored in project files. Browser website visual QA still blocked by missing managed preview relay.

final result: blocked

## v13 — final copy, mobile album and questionnaire options
Removed final flowers disclaimer sentence and updated presence item's second sentence. Desktop overlapping album preserved; <=650px becomes a vertically stacked set of full-ratio prints with slight rotations and no horizontal scroll/hint. Food and question placeholders updated. Added «Другое» drink with conditional required text, ignored for children/declined guests or when deselected. Server validates and writes custom drink into existing drink column. Transfer options now return/roundtrip/none with exact Russian labels in UI and sheet rows. Submit red with cream text and green focus ring.

Production build and ten model/server tests passed, including custom drink conditional validation/persistence, stale-text suppression and three transfer labels. Source assertions passed for requested wording. Browser visual QA remains blocked: missing preview relay. Real Sheets writes remain unconfigured pending Google authentication/deployment. No live or visual success claimed.

final result: blocked

## v14 — field resize disabled
Added resize:none, max-width:100% and border-box sizing to all RSVP inputs/textareas; textarea overflow:auto keeps arbitrary-length responses available within fixed rows. Production build passed. Preview screenshots remain unavailable. Google Apps Script sign-in retry accepted password and reached device approval; full integration not yet complete.

final result: blocked

Google connection retry status: user confirmed device approval. Browser authority review rejected the next observation because its requested origin was gds.google.com, outside the established Accounts/Sheets/Apps Script destinations. No attempt was made to bypass this denial or inspect through another surface. Authentication completion remains unknown; script deployment and live writes remain incomplete.
