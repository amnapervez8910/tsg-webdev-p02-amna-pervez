# Angaar — Responsive Restaurant Landing Page

**Author:** Amna Pervez  
**Project:** The Sky Gen — Web Development Project 02

## Business concept
Angaar is a restaurant-brand concept inspired by Pakistani live-fire cooking. Its landing page showcases charcoal BBQ, tandoori breads, iron-wok karahi and dining packages, with a clear flow from discovering the food to making a booking enquiry. A charcoal-navy background, ember-orange calls to action, gold typography and Urdu branding establish the visual identity.

## Project links
- **Live website:** https://tsg-webdev-p02-amna-pervez.vercel.app/
- **GitHub repository:** https://github.com/amnapervez8910/tsg-webdev-p02-amna-pervez
- **Mobile Lighthouse report (PageSpeed Insights):** https://pagespeed.web.dev/analysis/https-tsg-webdev-p02-amna-pervez-vercel-app/roaavhp7vp?form_factor=mobile

## Features
- Sticky navigation with smooth scrolling and active-link highlighting.
- Responsive hamburger menu with an accessible expanded-state indicator.
- Hero background image, English/Urdu headline, supporting text and booking CTA.
- Six food/service cards with icons and hover effects.
- Three dining packages with feature lists and a highlighted recommended plan.
- Testimonials slider with three reviews, arrows and navigation dots.
- Five-question JavaScript FAQ accordion.
- Contact form with client-side validation and an embedded Google Map.
- Footer with business information, quick links and social icons.
- Responsive mobile, tablet and desktop layouts.
- Menu-category switching, a client-side order summary and mobile booking links.

## Technology
- HTML5 for page structure and semantic sections.
- CSS3 and Bootstrap 5 CSS for layout, responsive styling and form components.
- JavaScript for the hamburger menu, FAQ, testimonials, form validation and menu interactions.
- Git and GitHub for version control.
- Vercel for deployment.
- Google Maps Embed for location presentation.

Bootstrap CSS is retained; interactive controls use JavaScript without the Bootstrap JavaScript bundle. Fonts and food images are served locally. Below-the-fold images and the map are deferred, while decorative mobile effects are reduced.

## Repository structure
```text
index.html
css/
  style.css
js/
  script.js
images/
  hero.jpg
  naan.jpg
  karahi.jpg
  seekh.jpg
  tikka.jpg
  chai.jpg
README.md
FONT-LICENSES.txt
```

## Run locally
Clone or download the repository and open `index.html` in a browser. A local static-file server can also be used. No application build step is required; the embedded map needs an internet connection.

## Form and order behaviour
The contact form validates input and displays an on-screen confirmation. The order builder keeps the selected items in the current page session. These are client-side interactions: no reservation or order is sent to restaurant staff, stored in a database or processed by a backend.


## Lighthouse report
PageSpeed Insights Mobile, captured on 12 October 2026 at 8:14 PM PKT:

| Category | Score |
| --- | --- |
| Performance | 99 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |

FCP: 1.1 s; LCP: 2.2 s; TBT: 0 ms; CLS: 0.004; Speed Index: 2.3 s.

The report uses Lighthouse 13.5.0, emulated Moto G Power and Slow 4G throttling. These are results from the linked lab test; local browser audits can differ. The accessibility audit flags contrast in the Packages section.

Report screenshot: `tsg-webdev-p02-amna-pervez-lighthouse-mobile.png`.

## Asset credits
- **Food imagery:** AI-generated restaurant-concept visuals supplied during AI-assisted project development and stored locally in `images/`. They are not presented as the author's food photography or as Unsplash photographs.
- **Bootstrap 5:** https://getbootstrap.com/ — MIT license.
- **Mulish:** https://github.com/googlefonts/mulish
- **Aref Ruqaa:** https://github.com/alif-type/aref-ruqaa
- **Rozha One:** https://fonts.google.com/specimen/Rozha+One
- **Font licensing:** copyright notices and SIL Open Font License text are included in `FONT-LICENSES.txt`.
- **Map:** Google Maps Embed.

AI assistance was used during development and optimisation; this documentation does not claim that every line was written without assistance.
