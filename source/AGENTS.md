# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved wedding direction
Use selected revised mock exec-096c78da-6000-4e63-98e0-983bc6fba14f.png. Forest green, cream, terracotta, restrained lime. Dip-kiss photo in hero; running photo mid-page; seated green-track photo at end with «Ждём вас». Date as one standalone race bib. Avoid crowded collage and winter motifs. All guest details not confirmed must remain explicitly unconfirmed. RSVP stays an honest demo until Sheets integration.

## v5 user corrections
All photos must remain completely uncropped on mobile and desktop: natural intrinsic aspect ratio, height auto, no rounded/arched crop, no zoom. Connect decorative route to photo lane, continue a single scroll-revealed path down the whole page, with gentler section transitions. Keep other approved content and palette.

## v6 supersedes the v5 route experiment
Restore arch around hero photo. Remove all full-page track/connector logic and reserved left gutters. Keep one animated decorative track in hero, strictly spanning left to right viewport edges. Present running photo as an editorial image+caption next to a short story; final photo belongs with the closing invitation, using one shared frame system. Keep body photographs in full natural aspect ratio; no zoom or crop.

## v7 confirmed content and RSVP (latest instructions override previous copy)
Header date left and invitation label right; no menu/initials. Hero photo enlarged, arched and LEFT; right copy «Два сердца. Один ритм. Одна дистанция.»; no hero button/location/date duplicate. Intro personal address and days/hours/minutes countdown to 05.01.2027 15:00 Asia/Novosibirsk. Full-width natural-ratio running and final photos. Red dashed schedule scroll reveal: 15:00 guests, 16:00 celebration, 22:00 finish. Venue Slumo (Сосновый бор), Veranda, Новая Заря 53а, map https://go.2gis.com/QHnQj. Palette dark green, dark burgundy, brown, navy, gold. No FAQ questions; host contact placeholder. RSVP deadline Dec 12, conditional adult/child guest blocks with unlimited additions and previous-block validation, attendance refusal hides following questions, child age replaces drinks. One Sheets row per guest. Never claim live Sheets integration until configured and tested.

## v8 visual refinement
Desktop photos must be noticeably smaller, bounded by viewport height while preserving full intrinsic ratio; keep mobile photo sizing as v7. New invitation text as user supplied. Countdown includes seconds, accent colon separators and a racing clock display. Wishes headings «Вклад в семейную оранжерею» and «Подарки». RSVP deadline accent date «12 декабря» must never wrap internally. Remove main «Гость», section «Попутчики», written required badges and «можно несколько». Keep validation and conditional logic; strengthen question hierarchy, field treatment and selection states.

## v9 smartphone layout
Header plus hero must fit one standard smartphone visible viewport. Use svh (with vh fallback), photo width from remaining height budget, smaller fluid typography and bounded track decoration. Preserve photo ratio and arch. Add short-portrait and landscape rules, compact informational sections, and retain natural scrolling for variable-length RSVP/accessibility text scaling. Desktop sizing unchanged.

## v10 dress-code exploration selected
User approved the first visible palette board «Шампанское и шалфей» (exec-c4c655b7-048c-4471-8480-e523bdbcd26e.png) and asked to insert it. Only dress-code section changes: light champagne background, real fabric imagery from approved board, eight labeled shades including both green shades, beige, gold, silver, burgundy, brown and navy, gentle pairing guidance and expandable full outfit board. Other content and mobile hero sizing unchanged.

## v11 contrast, album and clock
Replace separators between names with plain + in a non-italic sans-serif. Timer retains green outer panel and gets four red inner units (numbers and labels), with separators between. Add small timing-change notice under schedule. Order after venue: wishes green, dress-code beige (keep palette + choose shade wording, remove pairings and expandable inspiration), new green photo-album strip using exactly three newly attached photos, then beige RSVP. Album photos lightly overlap and rotate like physical prints; preserve full photos and horizontal swipe on mobile. Other sections/mobile hero unchanged.

## v12 final copy and provided response sheet
Wishes: gentle optional potted-plant suggestion, presence as greatest gift, forthcoming host contact for schedule/congratulations. Remove envelope/gift item, photo-sharing item, separate question block and footer slogan. Keep back-to-top footer link. User provided response spreadsheet 1cQJbsHasKCusnkls1r83SAU1xy9-Zx3lGL1Zm5UVYK8. Browser confirmed anonymous edit access; 12 schema headers saved on first sheet. Apps Script creation requires Google login. Backend defaults to this exact spreadsheet and first existing sheet, but endpoint remains unset until deployment. Never claim live connection without a roundtrip test.

## v13 copy, vertical mobile album, RSVP additions
Remove final «Это лишь идея…» sentence in flowers item; replace presence item's second sentence with user wording about hugs/laughter/dancing. Mobile album vertical, no horizontal scrolling; desktop overlapping row retained. Food placeholder updated, question placeholder no final period. Drinks includes «Другое» with conditional required free text (adult attending guests only), carried to Sheets drink cell; clear/ignore stale other text when not selected. Transfer now return/roundtrip/none with exact Russian labels. Submit button red with accessible light text. Endpoint remains unset pending Google sign-in/deployment.

## v14 field sizing
Disable manual resizing on all RSVP inputs/textareas. Text remains unrestricted; textarea overflow scrolls within its fixed rows. Retry Google Sheets deployment using authorized account flow; do not claim connection without roundtrip confirmation.

## v15 photo frames
User requests small light photo frames. Use warm light paper frames around hero (preserve arch and mobile viewport fit), running and closing photos; keep album's existing print frames, matching their paper color. No photo cropping or layout changes. Google connection and hosting are now handled by user independently; endpoint stays unset.

## v16 hosted-site corrections (base v14)
User chose v14 without photo frames; remove v15 frames. Use Safari-safe fabric backgrounds instead of clipped, absolutely positioned lazy images. Companions: question «Как зовут гостя?», placeholder «Напишите Имя и Фамилию гостя», implicit attendance yes with no attendance question. Confirmed success includes attached cat photograph cropped only with CSS, final exclamation. Reduce duplicate Sheets service calls while retaining lock, deduplication and confirmed acknowledgement. User reports live Google integration at https://ml.iiiii.info/; local endpoint still unknown; never overwrite their deployed integration with an empty endpoint. Need user's current source or /exec URL before a ready-to-upload rebuild. Certificate issue needs actual TLS evidence; browser currently reports ERR_HTTP2_PROTOCOL_ERROR, no confirmed certificate diagnosis.

## v17 link preview copy
Page title, Open Graph and Twitter title: «Приглашение на свадьбу — Михаил и Елизавета». Description for all previews: «Михаил и Елизавета приглашают вас на свадьбу. 5 января 2027 года, Новосибирск.» No final forever slogan. Live deployment is user-managed; supply metadata-only instructions to preserve their configured bundle.

## v18 guest arrival
Guest gathering is 15:30, January 5, 2027, Asia/Novosibirsk. Update schedule, countdown target and visible clock finish time together. Ceremony 16:00 and finish 22:00 unchanged.
