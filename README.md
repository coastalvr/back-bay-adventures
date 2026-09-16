# Back Bay Adventures — website

Static site for Capt. Todd Jones, Panama City Beach, FL. No build step, no framework.
Upload the whole folder to any web host (or open `index.html` in a browser).

## Files

- `index.html` — Home
- `fishing.html` — Fishing trips
- `rates.html` — Charter rates & policies
- `hunting.html` — Guided duck hunts
- `cast-and-blast.html` — Combined fishing + hunting trips
- `decoys.html` — Hand-carved cork decoys
- `reports.html` — Fishing reports (currently a placeholder + season guide)
- `testimonials.html` — All seven testimonials from the old site
- `gallery.html` — Photo gallery with lightbox
- `links.html` — Sponsors, partners and friends
- `css/site.css` — All styles. Colors and fonts are tokens at the top in `:root` (ivory paper, deep pine, brass).
  Fonts: Cormorant Garamond (headings), Source Serif 4 (text), Jost (small labels), loaded from Google Fonts.
- `js/site.js` — Mobile menu and gallery lightbox
- `img/` — Photos and logos from the old site, plus `favicon.svg`. `logo.png` is the original header logo with the white background removed.

## Layout notes

- Desktop header is two tiers: captain/location and phone on the top row, centered wordmark, navigation beneath.
- Below 1100px the header becomes a single sticky row with a Menu button.
- The three trip blocks sit side by side on desktop, image-beside-text on tablets, and stacked on phones.

## Editing

Phone number, email and nav appear on every page. To change them everywhere,
find-and-replace across the `.html` files (`850-819-5829`, `capttodd@backbayadventures.com`).

To add a fishing report, edit `reports.html` and replace the "No reports are posted right now" notice.

To add gallery photos, drop them in `img/` and add a block in `gallery.html`:

```html
<a href="img/photo.jpg" class=""><img src="img/photo.jpg" alt="Description" loading="lazy"><span>Caption</span></a>
```

Add `class="wide"` to make a photo span two columns.

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765
