# Angaar — Charcoal BBQ & Karahi

**Student:** Amna Pervez

## Business concept
Angaar is a fictional live-fire Pakistani restaurant concept based in Lahore, created for The Sky Gen Web Development Project 02. The landing page presents charcoal BBQ, traditional karahi, group-dining packages and catering services while guiding visitors from the hero section to menu exploration, package selection and a demo table-booking form. Angaar is an educational concept and does not represent a real restaurant or business listing.

## Features
- Sticky navigation, smooth scrolling and active-link highlighting
- Responsive hero with original branding, CTA and interactive embers
- Six service cards with icons and hover effects
- Filterable menu with a front-end demo order cart
- Three group packages with a highlighted recommended plan
- Three-review JavaScript testimonial slider
- Five-question JavaScript FAQ accordion
- Demo booking form and embedded Google Map showing the concept area
- Footer with business information, quick links and social icons
- Responsive desktop, tablet and mobile layouts with hamburger navigation

## Technology
HTML5, CSS3, JavaScript, Bootstrap 5, locally embedded Google Fonts and Google Maps Embed. CSS and JavaScript are organised in separate folders for maintainability.

## Run locally
Open `index.html` or use VS Code Live Server. Internet access is required only for Google Maps. Bootstrap and the original brand fonts are bundled locally.

## Deployment
Upload the complete folder to a public GitHub repository, then deploy it with Netlify or Vercel. No build command is required.

## Asset credits
All food images were generated specifically for this educational project using an AI image tool. Google Fonts, Bootstrap 5 and Google Maps are used through their official web services.

## Project structure
```text
tsg-webdev-p02-amna-pervez/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── hero.jpg
│   ├── seekh.jpg
│   ├── naan.jpg
│   ├── karahi.jpg
│   ├── tikka.jpg
│   └── chai.jpg
├── index.html
└── README.md
```


## Performance update
Bootstrap 5.3.3 is bundled into css/style.css and js/script.js (MIT license headers retained). The original fonts are subsetted and embedded in the stylesheet, avoiding external font requests. Hero is preloaded, gallery images decode asynchronously, mobile embers are static, and the map loads near the contact section. Booking confirmation is client-side only; no booking is sent to a server.


## Live project
- Live website: https://tsg-webdev-p02-amna-pervez.vercel.app
- GitHub repository: https://github.com/amnaparvez8910/tsg-webdev-p02-amna-pervez

## Rendering optimization
Unused Bootstrap CSS is removed; the Bootstrap Collapse component is bundled instead of the complete JavaScript bundle. Below-fold sections use content-visibility with responsive size estimates, and mobile counters avoid continuous text animation. Lighthouse scores vary with hardware and throttling. Run a fresh audit on the production URL for submission.


## Font and layout update
Original Mulish, Rozha One and Aref Ruqaa fonts are embedded as compact WOFF2 data in style.css. Their SIL OFL licenses are included in FONT-LICENSES.txt. Mobile uses static ember styling instead of initializing Canvas; desktop retains interactive embers. Review autoplay pauses outside the visible review section. Menu category buttons use accessible group/pressed semantics, and foreground colors are adjusted for readability. The booking interaction remains client-side only; no request is sent to a restaurant or stored on a server.
