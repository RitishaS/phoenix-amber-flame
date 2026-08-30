# Phoenix Rising Website

Build a professional, distinctive one-page marketing website for Phoenix India, a financial services company in Kalyan, Maharashtra that works as a Corporate Agent for Insurance and a Direct Sales Associate for Loans, and also handles accounts/tax filings. Founded in 2009. Avoid generic AI-template looks (no cream-background-with-terracotta-serif, no plain dark-mode-with-neon-green). Instead use a dark navy + warm amber "phoenix" theme — trustworthy but with warmth, since the brand name is Phoenix.

Design direction

Palette: deep navy/ink (#11162a, #1a2140) and deep teal (#173a38, #204f4b) as dark section backgrounds; warm parchment/paper (#f2ecdd, #fbf8f0) as light section backgrounds; amber-orange flame accent (#d9720a, #f0a839) for CTAs and highlights; deep ember red-brown (#7c2a17) for small accents on light sections.

Typography: pair a characterful serif display font (like Fraunces) with a clean sans body font (like Public Sans) and a monospace font (like IBM Plex Mono) for stats, labels and eyebrows/tags.

Signature element: an abstract "phoenix/flame" mark (simple line-art wing or flame shape with a gradient stroke) used in the header logo and as a large animated centerpiece in the hero. Use a recurring thin gradient "ember rule" divider between sections instead of generic spacing.

Alternate dark and light sections down the page for rhythm. Sticky header with blur backdrop. Subtle scroll-reveal animations (fade + slight rise), respecting reduced-motion preference. Keep decoration restrained — one bold signature moment (the hero mark), everything else disciplined and clean.

Fully responsive down to mobile; visible keyboard focus states on all interactive elements.

Sections to build (in order)

Header — sticky, dark, blurred background. Logo mark + "Phoenix India" wordmark on the left, nav links (Services, Why Us, About, Clients, Contact) center/right, phone number + "Get a Quote" button on the right, hamburger menu on mobile.

Hero — dark navy background with subtle radial gradient glows in amber and teal. Eyebrow text: "Corporate Agent · Est. 2009 · Kalyan, Maharashtra". Large serif headline: "Insurance, loans & accounts — under one roof." (style the last phrase in italic amber gradient). Subheadline: one to two sentences about serving Kalyan/Mumbai fleet owners, traders, co-operative banks and families since 2009. Two buttons: "Talk to Phoenix India" (filled amber) and "See what we cover" (ghost/outline). Below that, a small stats row in monospace: 2009 (serving clients since), ₹50L+ (monthly business volume), No. 1 (Iffco-Tokio, Mumbai region), 7+ yrs (Mumbai TaxiMan Union). On the right side, an animated phoenix/flame line-art mark.

Stats strip — full-width dark teal band, 4 columns with divider lines, monospace big numbers: "15+ yrs" (trusted by corporates & retail clients), "3-in-1" (Insurance, Loan & Accounts under one office), "#1 Region" (ranked No.1 in Mumbai with Iffco-Tokio GIC Ltd), "4 Banks" (including Canara Bank and 3 co-operative banks as clients).

Services — light parchment section. Heading: "Three desks. One office. Every document handled properly." Build as three tabs: Insurance, Loan, Accounts. Each tab shows a clean grid of items with a small feather/checkmark icon:

Insurance: Motor Insurance, Health Insurance, Factory Insurance, Group Mediclaim, Group Personal Accident, Contractor All Risk, Std Fire & Perils, Director & Officer Liability Policy, Workman Compensation, Building & Home Insurance, Plant & Machinery, Electronic Equipment Insurance, Hull Insurance, Marine Insurance, Professional Indemnity Insurance.

Loan: Home Loan, Mortgage Loan, Personal/Business Loan, Balance Transfer, Top-Up Loan, Project Loan, Education Loan, Construction Loan, Vehicle Loan (New & Refinance).

Accounts: Shop Act License, GST Registration & Filing, Income Tax Return Filing, Pvt Ltd/Ltd Company Registration, VAT Return/Sales Tax/CST, Trade Mark Registration/Patent, Service Tax, Professional Tax.

Why Phoenix India — dark section, heading "If you think every insurance office is the same, come talk to us." 4-card grid:

Best cover, fair price — we compare across insurers so you get the right cover at a genuinely competitive premium.

Personal & business, both — from a family's health cover to a fleet owner's motor policy.

A full financial spread — insurance, loans and accounts filings under one roof.

There at claim time — support from purchase through to settlement.

About the Director — two-column layout. Left: a dark teal card with the director's name Jagannath K. Shinde, role "Director", "Over two decades in Insurance & Management", and a short bullet list (strategic planning & business development; channel management, sales & marketing; specialist in General, Motor & Accident Insurance). Right: paragraph copy about his record of building and retaining motivated sales teams, leading sales operations across the Mumbai region since founding Phoenix India in 2009, and the 7+ year relationship with the Mumbai TaxiMan Union.

Clients — dark section with a horizontally auto-scrolling marquee (infinite loop) of client names in italic serif: Asian Bulk Carriers, Bhartiya Parivahan, Anchor India Pvt Ltd, Rukshmani Synthetics, Canara Bank, Bharat Co-operative Bank, Nagrik Shakari Bank, The Thane District Central Co-op Bank, Numerous Motor Dealers.

Contact — light section, heading "Give us a chance — we won't disappoint you." Two columns:

Left: office address, phone, website as info rows with icons, plus an embedded Google Map for the office location.

Office: Office No. 008, Ground Floor, Harihar Nook CHS Ltd, Kalyan-Murbad Road, Opp. Roshan Petrol Pump, Kalyan (W) – 421301

Telephone: 0251-6571888 (clickable tel: link)

Website: www.phoenixindia.co

Right: an enquiry form with fields — Full name, Mobile number, dropdown "What do you need?" (Insurance / Loan / Accounts, GST & Registration / Not sure yet), and a message textarea. Submit button "Send Enquiry" that shows an inline confirmation message on submit (no backend needed yet — note under the form that it should be connected to email/WhatsApp later).

Footer — dark, logo + tagline, three link columns (Company, Services, Reach us), bottom bar with copyright and address.

Functional requirements

Smooth scroll to anchor links from the header nav.

Sticky header gains a subtle shadow/background change on scroll.

Services section uses working tab switching (Insurance/Loan/Accounts).

Scroll-triggered fade/rise reveal animations on section content.

Enquiry form validates required fields and shows a success message on submit (client-side only for now).

Mobile menu (hamburger) that opens the nav links on small screens.

All copy should sound plain, direct and trustworthy — no marketing fluff, no invented statistics beyond what's listed above.

Content notes

Do not invent an email address, WhatsApp number, or additional achievements — only use the details listed in this prompt.

Keep all business facts (address, phone, founding year, director name, client names, service lists) exactly as given above.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://phoenix-amber-flame.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3b353b4c-7077-4acd-8faf-4bc3f24ecabb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
