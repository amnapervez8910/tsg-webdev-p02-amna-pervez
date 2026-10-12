# Angaar — Responsive Restaurant Landing Page

**Student:** Amna Pervez  
**Project:** The Sky Gen — Web Development Project 02

## Business concept
Angaar is a fictional Pakistani live-fire restaurant brand centred on charcoal BBQ, tandoori breads and iron-wok karahi. The landing page introduces its food and services, presents dining packages and customer testimonials, and guides visitors towards a booking enquiry. The dark charcoal palette, ember-orange buttons, gold accents and Urdu headline give the brand a distinct visual identity. This is an educational front-end project, not an operational restaurant booking system.

## Links
- Live website: https://tsg-webdev-p02-amna-pervez.vercel.app/
- GitHub: https://github.com/amnaparvez8910/tsg-webdev-p02-amna-pervez
- PageSpeed Insights Mobile report: https://pagespeed.web.dev/analysis/https-tsg-webdev-p02-amna-pervez-vercel-app/roaavhp7vp?form_factor=mobile

## Features
- Sticky navigation, smooth section scrolling and active-link highlighting.
- Responsive hamburger menu with an accessible expanded-state indicator.
- Image-backed hero with English/Urdu branding and a booking CTA.
- Six food/service cards with hover styling.
- Three dining packages with feature lists and a highlighted recommended option.
- Testimonials slider with arrows and navigation dots.
- JavaScript FAQ accordion.
- Contact/booking form with client-side validation and confirmation.
- Embedded Google Map, loaded when the contact section approaches the viewport.
- Footer with business information, quick links and social icons.
- Interactive menu categories and a client-side order-summary builder.
- Responsive layouts for mobile, tablet and desktop; sticky booking links on smaller screens.

## Technology
HTML5, CSS3, JavaScript, Bootstrap 5 CSS, Git/GitHub, Vercel and Google Maps Embed. The hamburger menu, FAQ, testimonials and menu interactions use JavaScript. Bootstrap CSS supplies framework layout and form styles; the Bootstrap JavaScript bundle is not required.

## Folder structure
```text
index.html
css/style.css
js/script.js
images/
README.md
FONT-LICENSES.txt
```

## Running locally
Download or clone the repository. Open `index.html` in a browser, or serve the repository with a local static-file server. There is no application build step. Google Maps requires an internet connection.

## Important limitations
The booking form and cart are front-end demonstrations only. No booking or order is sent to a server, stored in a database, or delivered to restaurant staff. An on-screen confirmation demonstrates the interface rather than an actual reservation.

## Performance and responsive evidence
The PageSpeed Insights Mobile report captured on 12 October 2026 at 8:14 PM PKT recorded:
- Performance: 99
- Accessibility: 96
- Best Practices: 100
- SEO: 100
- FCP: 1.1 s; LCP: 2.2 s; TBT: 0 ms; CLS: 0.004; Speed Index: 2.3 s.

These are that report's lab results, not guaranteed scores for every device. A separate local Chrome DevTools test recorded Performance 59; the discrepancy remains unresolved. The Google audit flags contrast in the Packages section.

Submission screenshots use mobile 390 x 844, tablet 768 x 1024 and desktop 1440 x 900. Browser screenshots do not replace testing the website on a real phone.

## Asset credits and licensing
- Bootstrap 5: https://getbootstrap.com/ — MIT license.
- Mulish: https://github.com/googlefonts/mulish
- Aref Ruqaa: https://github.com/alif-type/aref-ruqaa
- Rozha One: https://fonts.google.com/specimen/Rozha+One
- Font copyright notices and SIL Open Font License text are included in `FONT-LICENSES.txt`.
- Google Maps Embed is used for the location section.
- Food imagery: local files `hero.jpg`, `naan.jpg`, `karahi.jpg`, `seekh.jpg`, `tikka.jpg` and `chai.jpg` in `images/`. Original image sources and usage rights have not been verified in this documentation; the author must confirm and add the appropriate credits before final submission. No Unsplash or royalty-free provenance is claimed without evidence.

## Review preparation
Be ready to explain the HTML structure, responsive CSS, navigation state, slider, FAQ, form validation and client-side limitations. Confirm real-phone behaviour and image credits before submitting.
