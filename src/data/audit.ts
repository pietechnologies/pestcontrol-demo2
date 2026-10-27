export type Severity = "critical" | "high" | "medium";

export interface Gap {
  id: string;
  title: string;
  severity: Severity;
  current: string;
  impact: string;
  fix: string;
  category: "Conversion" | "Trust" | "SEO" | "Content" | "Tech / UX";
}

export const SITE = {
  name: "First Choice Termite & Pest Control",
  url: "firstchoicepestcontrolllc.com",
  city: "Decatur, GA 30030",
  audited: "Full crawl of home, services and contact pages",
};

/** What the current site has today (observed) */
export const currentState = [
  "Home page with a single block of termite copy",
  "A basic Contact page + phone number",
  "Generic stock imagery, template layout",
  "Mentions of bed bugs, bees, wasps, ants, rodents, wildlife (in prose only)",
  "A privacy sentence and a 'Ready to Make an Appointment?' paragraph",
];

export const gaps: Gap[] = [
  {
    id: "booking",
    title: "No online booking or self-scheduling",
    severity: "critical",
    category: "Conversion",
    current:
      "The only way to act is to call or send a vague contact message. Nothing can be booked after hours.",
    impact:
      "Roughly half of home-service research happens evenings/weekends. Sites with scheduling see ~35% more form submissions. Every after-hours visitor is leaking to Terminix/Arrow, who book online.",
    fix: "Add a 3-step widget: ZIP → pest + property size → date/time. Push to Jobber / Housecall Pro / FieldRoutes and SMS the lead to the owner instantly.",
  },
  {
    id: "pricing",
    title: "Zero pricing transparency",
    severity: "critical",
    category: "Conversion",
    current: "No prices, no 'starting at', no packages. Price is hidden behind a phone call.",
    impact:
      "High-intent buyers bounce to the next result. Competitors publish numbers (Arrow termite from $495; Breda quarterly ~$95) and win the comparison before the phone rings.",
    fix: "Publish 'starting at' prices, a Good/Better/Best plan table, and an instant estimator. Tiered pricing lifts close rates; add-ons lift upsell 25–50%.",
  },
  {
    id: "guarantee",
    title: "No guarantee or damage warranty stated",
    severity: "critical",
    category: "Trust",
    current: "The copy promises 'once and for all' but names no warranty, re-treat policy or refund.",
    impact:
      "Termite buyers are buying risk transfer. Terminix offers up to $250k damage repair, Arrow up to $150k, Breda a 90-day re-treat + 10-year rate lock, Massey money-back with 24-hr response. First Choice offers… a sentence.",
    fix: "Create a named, dated guarantee ('The First Choice Promise: free re-treat for 90 days, written termite bond, money-back in 30 days') with a badge in the header and on every service page.",
  },
  {
    id: "reviews",
    title: "No reviews, ratings or testimonials anywhere",
    severity: "critical",
    category: "Trust",
    current: "No Google rating, no review count, no customer quotes, no star schema.",
    impact:
      "97% of consumers read reviews for local services; a one-star rise moves revenue 5–9%. A competitor with 200+ reviews beats an identical company with 30 every time.",
    fix: "Embed live Google reviews, show the star count in the header, and automate a review-request text after every completed job.",
  },
  {
    id: "servicepages",
    title: "No individual service or pest pages",
    severity: "critical",
    category: "SEO",
    current:
      "Pests are listed in one paragraph. There is no /termite-control, /bed-bugs, /mosquito, /rodent-control page.",
    impact:
      "You cannot rank for 'bed bug exterminator Decatur' with a sentence. Each missing page is a missing keyword cluster — that's where 80% of competitor organic traffic lives.",
    fix: "Build 10–12 pest pages (signs, treatment process, price range, FAQ, CTA) + a pest identification library with photos.",
  },
  {
    id: "localpages",
    title: "No service-area / city pages or map",
    severity: "high",
    category: "SEO",
    current: "Only Decatur 30030 is referenced. No map, no ZIP list, no neighbourhood pages.",
    impact:
      "Loses Avondale Estates, Tucker, Stone Mountain, Druid Hills, Brookhaven, Dunwoody, Chamblee searches to Northwest Exterminating and Arrow, who run full location directories.",
    fix: "One page per city/ZIP with local content + an interactive 'Do you serve my ZIP?' checker that converts the visitor on the spot.",
  },
  {
    id: "schema",
    title: "No structured data (schema markup)",
    severity: "high",
    category: "SEO",
    current: "No LocalBusiness, Service, FAQ, Review or AggregateRating JSON-LD detected.",
    impact: "No star ratings, FAQ accordions or service rich results in Google — lower click-through at the same rank, and weaker AI-search visibility.",
    fix: "Add LocalBusiness(PestControl) + Service + FAQPage + AggregateRating + areaServed JSON-LD sitewide.",
  },
  {
    id: "trust",
    title: "No licensing, insurance or credential proof",
    severity: "high",
    category: "Trust",
    current: "No GA pest control licence number, no insurance statement, no GPCA/NPMA membership, no years in business.",
    impact: "Pest control is a licensed trade; buyers check. Missing licence data also hurts Google's E-E-A-T signals.",
    fix: "Footer line with licence #, 'licensed, bonded & insured', association logos, 'Serving metro Atlanta since 20XX'.",
  },
  {
    id: "team",
    title: "No real photos of team, trucks or work",
    severity: "high",
    category: "Trust",
    current: "Stock photography only; no About page with faces.",
    impact: "Real technician photos are one of the fastest trust lifts on home-service sites — customers are letting a stranger into their home.",
    fix: "Photo shoot: team, branded trucks, before/after jobs, technician bios with certifications.",
  },
  {
    id: "cta",
    title: "Weak, buried calls to action",
    severity: "high",
    category: "Conversion",
    current: "'Call us now' inside a paragraph. No sticky header CTA, no mobile call bar, no exit intent.",
    impact: "Mobile traffic is 60–70% of pest searches; if the tap-to-call button is not permanently visible, leads die.",
    fix: "Sticky header 'Call' + 'Free Inspection', mobile bottom bar with Call / Text / Book, CTA block after every section.",
  },
  {
    id: "emergency",
    title: "No same-day / emergency positioning",
    severity: "medium",
    category: "Conversion",
    current: "No response-time promise, no hours, no 24/7 line.",
    impact: "Pest demand is panic-driven. 'Same-day service' and '24-hr response' are Massey's and Terminix's headline hooks.",
    fix: "Banner: 'Same-day service available — book before 12pm' plus published hours and an emergency number.",
  },
  {
    id: "content",
    title: "Thin, duplicated, template copy",
    severity: "high",
    category: "Content",
    current:
      "Commercial copy appears on the residential page; the contact page repeats the home page. A few hundred words total sitewide.",
    impact: "Thin and duplicated content caps rankings and reads as a low-effort template to buyers.",
    fix: "Rewrite with local specifics (Georgia subterranean termite swarm season, moisture/crawl-space issues) + a blog with 2 posts/month.",
  },
  {
    id: "noblog",
    title: "No blog / seasonal pest content hub",
    severity: "medium",
    category: "Content",
    current: "No articles, guides, checklists or videos.",
    impact: "Gives up every informational search ('do I have termites or flying ants?') that competitors use to capture demand early.",
    fix: "Seasonal calendar content, pest ID guides, 'cost of termite treatment in Georgia' money pages.",
  },
  {
    id: "tech",
    title: "Technical & UX debt",
    severity: "high",
    category: "Tech / UX",
    current:
      "Template build, heavy unoptimised images, no visible analytics/call tracking, no accessibility pass, no live chat.",
    impact: "Slow mobile pages lose ~20% of visitors per extra second; without call tracking you cannot tell which spend works.",
    fix: "Core Web Vitals pass, WebP/lazy loading, GA4 + call tracking + conversion events, WCAG AA, AI chat widget for after-hours capture.",
  },
  {
    id: "offers",
    title: "No offers, financing or recurring plans",
    severity: "medium",
    category: "Conversion",
    current: "'Great specials and discounts' is mentioned but never shown.",
    impact: "Arrow advertises $50 off first service and $100 off Sentricon; termite jobs are high-ticket and competitors offer financing.",
    fix: "A live Specials page, a quarterly subscription plan with online sign-up, and BNPL/financing for termite work.",
  },
];

export interface CompetitorRow {
  feature: string;
  first: boolean | "partial";
  breda: boolean | "partial";
  arrow: boolean | "partial";
  terminix: boolean | "partial";
}

export const comparison: CompetitorRow[] = [
  { feature: "Online booking / self-scheduling", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Instant quote or published pricing", first: false, breda: "partial", arrow: true, terminix: true },
  { feature: "Named guarantee / damage warranty", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Reviews & star rating on site", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Dedicated page per pest / service", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Service-area & city pages", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Recurring plan sign-up (quarterly)", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Blog / pest library content hub", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Live chat or AI assistant", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Visible special offers", first: "partial", breda: true, arrow: true, terminix: true },
  { feature: "Customer account / portal", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Eco / pet-&-child-safe messaging", first: false, breda: true, arrow: true, terminix: "partial" },
  { feature: "Structured data (schema) for rich results", first: false, breda: true, arrow: true, terminix: true },
  { feature: "Financing for high-ticket termite work", first: false, breda: true, arrow: "partial", terminix: true },
  { feature: "Spanish / multilingual option", first: false, breda: false, arrow: "partial", terminix: true },
];

export const competitorNotes = [
  {
    name: "BREDA Pest Management",
    edge: "90-day re-treat guarantee, 10-year termite rate lock, infrared + microwave termite tech as a differentiator, strong Reddit/word-of-mouth presence (~$95/quarter).",
  },
  {
    name: "Arrow Exterminators",
    edge: "Free inspection funnel, up to $150k termite damage warranty, termite treatment 'from $495', live special offers ($50 off first service), eco-friendly positioning.",
  },
  {
    name: "Terminix",
    edge: "Nix Pest Guarantee + Nix & Fix termite guarantee up to $250k, full online booking and account portal, massive review volume.",
  },
  {
    name: "Massey Services",
    edge: "No-Nonsense money-back guarantee with a 24-hour response promise, city landing page for Decatur specifically.",
  },
  {
    name: "Northwest Exterminating",
    edge: "Bundled service packaging (pest + termite + mosquito + lawn), service-center finder, central quote line.",
  },
];

export interface Idea {
  title: string;
  blurb: string;
}

export const newIdeas: Idea[] = [
  {
    title: "Instant Price Estimator",
    blurb: "Home size + pest + frequency returns a real price range in 20 seconds, then books. Removes the call from the front of the sale.",
  },
  {
    title: "ZIP Coverage Checker",
    blurb: "'Do you serve 30033?' → instant yes + next available slot. Micro-commitment that lifts form starts.",
  },
  {
    title: "Pest ID Tool",
    blurb: "Photo-card identifier (termite vs flying ant, bed bug vs carpet beetle) that routes to the right service page and CTA.",
  },
  {
    title: "Written Termite Bond Online",
    blurb: "Sell and renew the termite bond digitally with e-signature — competitors still make you wait for a rep.",
  },
  {
    title: "Georgia Pest Season Calendar",
    blurb: "Month-by-month local pest pressure (March termite swarms, May mosquitoes, Oct rodent entry) driving seasonal bookings and SEO.",
  },
  {
    title: "Real-Estate / Closing Letters (WDO)",
    blurb: "A dedicated page for realtors needing 48-hour Wood Infestation Reports — a high-margin, low-competition niche in Decatur.",
  },
  {
    title: "24/7 AI Chat + Text-Back",
    blurb: "Answers common questions, captures after-hours leads, and auto-texts 'We'll call you within the hour'.",
  },
  {
    title: "Automated Review Engine",
    blurb: "Post-job SMS to the Google profile. Target 200+ reviews — the single biggest local-SEO lever available.",
  },
  {
    title: "Subscription Protection Plan",
    blurb: "Card-on-file quarterly plan with online sign-up: predictable revenue and a far higher customer lifetime value.",
  },
  {
    title: "Before / After Job Gallery",
    blurb: "Real crawl-space, attic and bed-bug jobs with technician names. Proof beats adjectives.",
  },
  {
    title: "Pet & Child Safe Program",
    blurb: "A named low-toxicity program with re-entry times. A top objection answered before it is asked.",
  },
  {
    title: "Commercial Compliance Portal",
    blurb: "Restaurants and warehouses need logbooks and audit-ready documentation — sell that, not just 'commercial service'.",
  },
];

export const roadmap = [
  {
    phase: "Week 1–2 — Stop the bleeding",
    items: [
      "Sticky call bar + mobile tap-to-call",
      "Publish guarantee, licence #, insurance",
      "Embed Google reviews + star rating",
      "Add a 3-field quote form to every page",
      "GA4 + call tracking + conversion events",
    ],
  },
  {
    phase: "Week 3–6 — Build the engine",
    items: [
      "10–12 pest/service pages + pricing tiers",
      "Online booking widget (Jobber / Housecall Pro)",
      "Instant estimator + ZIP checker",
      "LocalBusiness / Service / FAQ schema",
      "Image + Core Web Vitals optimisation",
    ],
  },
  {
    phase: "Month 2–3 — Outrank them",
    items: [
      "City pages: Decatur, Avondale, Tucker, Druid Hills, Stone Mountain",
      "Blog + Georgia pest season calendar",
      "Automated review-request SMS flow",
      "Subscription plan with card-on-file",
      "Realtor WDO letter landing page + outreach",
    ],
  },
];

export const metrics = [
  { label: "Conversion-critical gaps", value: "5", sub: "booking, pricing, guarantee, reviews, service pages" },
  { label: "Pages ranking per pest", value: "0", sub: "competitors run 10–30" },
  { label: "Reviews shown on site", value: "0", sub: "competitors show 200–3,000+" },
  { label: "Est. lead lift if fixed", value: "2–4×", sub: "same traffic, better conversion" },
];
