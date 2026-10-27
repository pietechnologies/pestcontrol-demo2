export const services = [
  {
    icon: "shield",
    title: "Termite Control & Bonds",
    from: "from $795",
    text: "Liquid Termidor barriers, bait stations and a written, transferable Georgia termite bond.",
  },
  {
    icon: "home",
    title: "Quarterly Pest Protection",
    from: "from $119 / visit",
    text: "Ants, roaches, spiders, silverfish and crickets — interior, exterior and perimeter.",
  },
  {
    icon: "flame",
    title: "Bed Bug Heat Treatment",
    from: "from $650",
    text: "Whole-room thermal remediation. One visit, no laundry marathon, 60-day guarantee.",
  },
  {
    icon: "lock",
    title: "Rodent Exclusion",
    from: "from $249",
    text: "Trapping plus sealing every entry point, attic sanitation and insulation replacement.",
  },
  {
    icon: "droplet",
    title: "Mosquito & Tick",
    from: "from $89 / month",
    text: "Monthly barrier misting March–October. Yard usable again in two hours.",
  },
  {
    icon: "truck",
    title: "Wildlife Removal",
    from: "from $395",
    text: "Squirrels, raccoons, opossums and bats — humane removal plus damage repair.",
  },
  {
    icon: "building",
    title: "Commercial & Compliance",
    from: "custom",
    text: "Restaurants, warehouses, multifamily. Audit-ready logbooks and after-hours service.",
  },
  {
    icon: "clipboard",
    title: "Real Estate WDO Letters",
    from: "from $125",
    text: "Wood Infestation Reports for closings, turned around in 48 hours for realtors.",
  },
] as const;

export const plans = [
  {
    name: "Essential",
    price: 119,
    tag: "",
    bullets: [
      "Quarterly interior + exterior treatment",
      "Covers 15 common pests",
      "Free re-treats between visits",
      "Same technician every time",
    ],
  },
  {
    name: "Complete",
    price: 149,
    tag: "Most popular",
    bullets: [
      "Everything in Essential",
      "Rodent monitoring stations",
      "Fire ant & carpenter bee control",
      "Annual termite inspection included",
      "Priority 24-hour response",
    ],
  },
  {
    name: "Total Home Shield",
    price: 199,
    tag: "Best value",
    bullets: [
      "Everything in Complete",
      "Full termite bond with damage warranty",
      "Monthly mosquito & tick barrier",
      "Crawl-space moisture check",
      "Unlimited free callbacks",
    ],
  },
];

export const reviews = [
  {
    name: "Danielle R.",
    area: "Oakhurst, Decatur",
    text: "Found termite tubes in our crawl space on a Sunday. They inspected Monday morning and treated Tuesday. The bond paperwork was emailed the same day.",
    service: "Termite treatment",
  },
  {
    name: "Marcus T.",
    area: "Avondale Estates",
    text: "Quarterly plan for two years now. Same tech, always texts before arriving, and the roach problem our last company could not fix has been gone since visit two.",
    service: "Quarterly plan",
  },
  {
    name: "Priya S.",
    area: "Druid Hills",
    text: "Bed bugs from a hotel trip. Heat treatment in one day and they came back free at 30 days to confirm. Worth every dollar.",
    service: "Bed bug heat treatment",
  },
  {
    name: "Jerome W.",
    area: "Tucker",
    text: "Squirrels in the attic. They sealed nine entry points and replaced the chewed insulation. No noise since.",
    service: "Wildlife removal",
  },
];

export const pestLibrary = [
  { name: "Subterranean Termite", sign: "Mud tubes on foundation, hollow-sounding wood, March swarmers", risk: "Severe" },
  { name: "German Cockroach", sign: "Droppings in kitchen cabinets, faint musty odor", risk: "High" },
  { name: "Bed Bug", sign: "Rust spots on sheets, bites in a line, shed skins near the bed", risk: "High" },
  { name: "Carpenter Ant", sign: "Sawdust piles by woodwork, rustling in walls at night", risk: "High" },
  { name: "Roof Rat", sign: "Attic scratching after dusk, gnawed wiring and packaging", risk: "High" },
  { name: "Brown Recluse", sign: "Irregular webs in basements and closets", risk: "Medium" },
  { name: "Carpenter Bee", sign: "Perfect round holes in eaves, decks and siding", risk: "Medium" },
  { name: "Fire Ant", sign: "Loose soil mounds in the lawn, aggressive colony stinging", risk: "Medium" },
];

export const faqs = [
  {
    q: "How much does termite treatment cost in Decatur?",
    a: "Most Decatur homes run $795–$1,400 for a full liquid barrier, depending on linear footage and crawl-space access. Bait-station systems start around $950 with an annual renewal. You get the exact number in writing after a free inspection — never an over-the-phone guess.",
  },
  {
    q: "Are your treatments safe for kids and pets?",
    a: "Yes. Our Green Shield program uses EPA-registered, low-toxicity products applied to cracks, crevices and the exterior perimeter. Typical re-entry time is two hours for interior work, and your technician will tell you exactly when it's clear.",
  },
  {
    q: "What does the guarantee actually cover?",
    a: "If pests return between scheduled visits, we re-treat free within 48 hours. Termite bond customers are covered for retreatment plus damage repair, and if you're unhappy in the first 30 days we refund your last service.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Quarterly plans are month-to-month and can be cancelled anytime with no penalty. Termite bonds are annual because the warranty is annual.",
  },
  {
    q: "How fast can you get here?",
    a: "Same-day service is usually available for bookings placed before 12pm, and next-day for everything else. Emergencies (stinging insects, rodents in living space) get priority.",
  },
  {
    q: "Which areas do you serve?",
    a: "Decatur, Avondale Estates, Tucker, Stone Mountain, Scottdale, Clarkston, Druid Hills, Candler Park, Kirkwood, Brookhaven, Chamblee and Dunwoody.",
  },
];

export const areas = [
  "Decatur", "Avondale Estates", "Tucker", "Stone Mountain", "Scottdale", "Clarkston",
  "Druid Hills", "Candler Park", "Kirkwood", "Brookhaven", "Chamblee", "Dunwoody",
];
