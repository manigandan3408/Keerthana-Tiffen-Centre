# Keerthana Tiffin Centre – Google Review QR + NFC card

A physical review card. Customers **scan the QR code** or **tap their phone on the NFC card**, and both open Keerthana Tiffin Centre's Google review page:

```
https://g.page/r/CZVRWFme0k4tEAI/review
```

```
QR scan ─┐
         ├─► Google review page ─► customer picks Google stars ─► writes review ─► taps Google's Post
NFC tap ─┘
```

The customer writes and posts the review themselves, on Google. This site does not post, collect, store or count reviews, has no database, and asks for no name or email.

## Pages

| Route | What it is |
|---|---|
| `/` | The digital review card: name (English + Tamil), "Enjoyed your meal?", a large **Review us on Google** button, a tap-or-scan explanation, and the QR code |
| `/qr` | For the owner: the printable A6 card, QR downloads (PNG and SVG), a link tester, and NFC programming notes |

Any other address (for example the old `/thank-you`) redirects to `/`.

## Run it

Needs Node.js **20.19+ or 22.12+**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output in dist/
npm run preview    # try the production build locally
```

There are no environment variables and no accounts to set up.

## Deploy to Render (static site)

1. Put this folder in a GitHub repository.
2. Render dashboard → **New → Blueprint** → select the repository. Render reads `render.yaml` and creates a static site.
   (Or **New → Static Site**: build command `npm ci && npm run build`, publish directory `dist`, and a rewrite rule `/*` → `/index.html`.)

The rewrite rule makes reloading `/qr` work.

## Print the card

1. Open `/qr`.
2. Click **Test the link** and check it opens the Google review page for Keerthana Tiffin Centre.
3. Click **Print card**. In the print dialog: paper **A6**, margins **None**, scale **100%**. Choose "Save as PDF" for a file to give a print shop.
4. **Scan the printed card with a phone** before printing a batch.

The QR uses the highest error correction (level H), so it still scans if a card is scuffed. **Download QR (PNG / SVG)** gives just the QR, for other uses (the SVG is best for print shops).

## Program the NFC card

A website can't write to a physical NFC card, so this is done once, separately:

1. Use NFC-writable tags or cards that support NDEF (for example NTAG213, NTAG215 or NTAG216).
2. On your phone, open an NFC writer app (for example "NFC Tools") → **Write** → **Add a record** → **URL / URI**.
3. Enter exactly `https://g.page/r/CZVRWFme0k4tEAI/review` (the `/qr` page has a **Copy link** button) and **Write**, holding the card to the back of the phone.
4. Test the finished card with an **Android** phone (NFC switched on) and an **iPhone XS or newer**. Both should open the Google review page.
5. Optionally lock the tag in the app so nobody can overwrite it.

## Changing the Google link later

The link lives in one place: `src/lib/config.js`. Change it there, rebuild, reprint the QR card from `/qr`, and re-write any NFC cards.

## Project layout

```
src/
  main.jsx, App.jsx              entry + routes
  pages/LandingPage.jsx          the digital review card (/)
  pages/QrPage.jsx               printable card + NFC notes (/qr)
  components/ReviewCard.jsx      the printable A6 card
  components/TapIllustration.jsx phone-taps-card artwork
  components/Icons.jsx           logo, star, heart, NFC symbol
  lib/config.js                  the Google review link
  lib/qr.js                      QR code generation
  styles.css                     all styling, including the print card
render.yaml                      Render static-site blueprint
```
