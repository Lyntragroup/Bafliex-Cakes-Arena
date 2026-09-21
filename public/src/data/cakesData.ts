export const CONTACT_INFO = {
  phoneDisplay: "0727 45 38 39",
  phoneIntlDisplay: "+254 727 453 839",
  phoneRaw: "+254727453839",
  whatsappNumber: "254727453839",
  secondaryPhone: "0727 45 38 39",
  mpesaTill: "678814",
  studioLocation:
    "T-Plaza Building, 1st Floor, Kenyatta Highway, Thika Town — next to Quickmart Supermarket & Java Thika, near KFC Thika",
  shortStudioLocation: "T-Plaza, 1st Floor, Kenyatta Highway, Thika",
  hours: "Mon – Sat: 8:30 AM – 8:00 PM • Sun: 10:00 AM – 2:00 PM",
};

export function buildWhatsAppLink(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`;
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/bafliexcakes/",
  instagram: "https://www.instagram.com/bafliexcakes/",
  tiktok: "https://www.tiktok.com/@bafliexcakes",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Bafliex+Cakes+Arena&query_place_id=ChIJBUsQZIVOLxgRIf2dX9jejWY",
  whatsappCatalog: `https://wa.me/c/${CONTACT_INFO.whatsappNumber}`,
};

export const SOCIAL_STATS = {
  instagramFollowers: "6.2K+",
  instagramPosts: "165",
  tiktokFollowers: "1.2K+",
  tiktokLikes: "6.6K",
  tiktokVideos: "137",
};

export const ALL_FLAVOURS = [
  'Vanilla', 'Tropical Vanilla', 'Chocolate', 'Chocolate Chip', 'Chocolate Delight', 'Chocolate Fudge', 'Chocolate Mint', 'Chocolate Orange', 'Chocolate Toffee', 'Caramel', 'Milk Caramel', 'Caramel-Choco', 'Banana', 'Carrot', 'Carrot Nut', 'Carrot Pineapple', 'Coconut', 'Coconut Caramel', 'Coconut Lemon', 'Coconut Orange', 'Marble', 'Lemon', 'Orange', 'Orange Poppyseed', 'Passion', 'Pineapple', 'Strawberry', 'Blueberry', 'Bubblegum', 'Mint', 'Mint Chocolate', 'Fruit', 'Mixed Fruit', 'Rich Fruit', 'English Fruit Cake', 'Red Velvet', 'Red Velvet Cheese Cream', 'Black Forest', 'White Forest', 'Pinacolada', 'Coffee', 'Tiramisu', 'Cinnamon Cherry', 'Fudge', 'Forest Fudge', 'Mocha', 'Butterscotch', 'Creamy Caramel Delight', 'Salted Caramel Coco', 'Silk Velvet Marble', 'Amarula', 'Amarula Black Forest', 'Amarula White Forest', 'Chocolate Milk', 'Diabetic Cake', 'Eggless Cake', 'Ice Cream Cake', 'Funfeitti', 'Rainbow', 'Zucchini', 'Brownies', 'Pink Champagne', 'Blueberry Foundation Velvet'
] as const;

export const CAKE_ADD_ONS = [
  { name: "Bento Lunchbox Cake (For 2)", price: "Ksh 1,500" },
  { name: "Dozen Custom Cupcakes", price: "Ksh 1,800" },
  { name: "Edible Photo Print", price: "Ksh 450" },
  { name: "Laser-Cut Name Topper", price: "Ksh 300" },
  { name: "Edible Gold Leaf Finish", price: "Ksh 300" },
  { name: "Fresh Flower Crown", price: "Ksh 400" },
  { name: "Ferrero Rocher Toppings", price: "Ksh 350" },
  { name: "Custom Fondant Figurine", price: "Ksh 250 – 500" },
  { name: "Extra Cake Tier", price: "From Ksh 2,200" },
];

export interface CakeItem {
  id: string;
  name: string;
  category: "Weddings & Ruracio" | "Birthdays & Milestones" | "Graduations" | "Luxury Kids" | "House Warming" | "Baby Showers" | "Corporate" | "Anniversary";
  tagline: string;
  startingPrice: number;
  defaultWeight: string;
  servings: string;
  flavors: string[];
  image: string;
  badge?: string;
  popularIn?: string;
}

export const CAKE_CATALOG: CakeItem[] = [
  {
    id: "royal-gold-drip",
    name: "Royal Honey Gold & Berry Drip",
    category: "Birthdays & Milestones",
    tagline: "Silky vanilla bean fresh cream with Belgian white chocolate gold drip & fresh Naivasha strawberries",
    startingPrice: 2700,
    defaultWeight: "1.5 Kg",
    servings: "12–15 Slices",
    flavors: ["Vanilla Passion Curd", "Red Velvet Cream Cheese", "Strawberry Champagne"],
    image: "/images/cake-gold-drip.jpg",
    badge: "Most Ordered in Ruiru & Juja",
    popularIn: "Membley & Juja"
  },
  {
    id: "ruracio-calabash-heritage",
    name: "Ruracio Heritage Tier",
    category: "Weddings & Ruracio",
    tagline: "Bespoke 2-tier traditional dowry centerpiece with edible gold leaf, sugar roses & rich fruit or Amarula sponge",
    startingPrice: 6900,
    defaultWeight: "3.5 Kg (2 Tiers)",
    servings: "35–45 Slices",
    flavors: ["Rich Fruit", "Amarula", "Vanilla"],
    image: "/images/cake-ruracio.jpg",
    badge: "Ruracio Special",
    popularIn: "Thika & Kiambu"
  },
  {
    id: "honours-grad-scroll",
    name: "Class of '26 Honours Graduation Cake",
    category: "Graduations",
    tagline: "Handcrafted mortarboard cap, edible scroll degree & personalized university colours tailored for every proud graduate",
    startingPrice: 3400,
    defaultWeight: "2.0 Kg",
    servings: "18–22 Slices",
    flavors: ["Chocolate Fudge", "Blueberry", "Chocolate Chip"],
    image: "/images/cake-graduation.jpg",
    badge: "Graduation Season Favorite",
    popularIn: "Juja & Kahawa"
  },
  {
    id: "belgian-fudge-overdose",
    name: "Triple Belgian Truffle & Ferrero Crown",
    category: "Birthdays & Milestones",
    tagline: "Decadent dark cocoa layers drenched in 70% Belgian chocolate ganache, topped with Ferrero Rocher & gold dust",
    startingPrice: 2600,
    defaultWeight: "1.5 Kg",
    servings: "12–15 Slices",
    flavors: ["Chocolate Fudge", "Mint Chocolate", "Coffee"],
    image: "/images/cake-chocolate.jpg",
    badge: "Bestseller",
    popularIn: "Nairobi Westlands & Kilimani"
  },
  {
    id: "emerald-white-wedding",
    name: "The Windsor Ivory & Gold Wedding Pillar",
    category: "Weddings & Ruracio",
    tagline: "Architectural 3-tier luxury wedding cake with handcrafted sugar orchids, pearlescent finish & custom tasting box",
    startingPrice: 12500,
    defaultWeight: "6.0 Kg (3 Tiers)",
    servings: "70–90 Slices",
    flavors: ["Lemon", "Red Velvet", "Vanilla"],
    image: "/images/cake-wedding.jpg",
    badge: "Free Tasting Box",
    popularIn: "Nairobi & Thika Greens"
  },
  {
    id: "safari-pastel-first-birthday",
    name: "Pastel Safari Dreams Kids Crown",
    category: "Luxury Kids",
    tagline: "Whimsical handcrafted fondant safari animals, soft fresh-cream clouds & low-sugar moist sponge for little ones",
    startingPrice: 3900,
    defaultWeight: "2.0 Kg",
    servings: "20–25 Slices",
    flavors: ["Vanilla", "Strawberry", "Marble Swirl"],
    image: "/images/cake-kids.jpg",
    badge: "Kids Favorite",
    popularIn: "Ruiru Kamakis & Tatu City"
  },
  {
    id: "housewarming-keys-rustic",
    name: "New Home Harvest Cake",
    category: "House Warming",
    tagline: "Rustic semi-naked sponge with golden caramel drip, handcrafted fondant cottage & golden key topper to bless a brand-new home",
    startingPrice: 2700,
    defaultWeight: "1.5 Kg",
    servings: "14–18 Slices",
    flavors: ["Vanilla Bean", "Carrot & Warm Spice", "Chocolate Caramel"],
    image: "/images/cake-housewarming.jpg",
    badge: "House Warming Favorite",
    popularIn: "Thika Greens & Tatu City"
  },
  {
    id: "baby-shower-cloud",
    name: "Pastel Clouds Baby Shower Cake",
    category: "Baby Showers",
    tagline: "Blush pink & baby blue ombré fresh cream with tiny fondant onesie, booties & fluffy clouds — hidden gender-reveal sponge available on request",
    startingPrice: 2800,
    defaultWeight: "1.5 Kg",
    servings: "14–18 Slices",
    flavors: ["Vanilla Milk", "Strawberries & Cream", "Blueberry"],
    image: "/images/cake-babyshower.jpg",
    badge: "Gender-Reveal Ready",
    popularIn: "Membley & Juja"
  },
  {
    id: "corporate-boardroom",
    name: "Executive Boardroom Branded Cake",
    category: "Corporate",
    tagline: "Sleek minimalist corporate cake with your company logo in edible print, brand-color accents & gold detailing for launches & office celebrations",
    startingPrice: 4200,
    defaultWeight: "2.5 Kg",
    servings: "25–30 Slices",
    flavors: ["Chocolate Fudge", "Red Velvet", "Lemon"],
    image: "/images/cake-corporate.jpg",
    badge: "Office Delivery",
    popularIn: "Nairobi & Thika CBD"
  }
];

export interface DeliveryZone {
  id: string;
  name: string;
  neighborhoods: string;
  eta: string;
  fee: number;
  freeThreshold: number;
  sameDayAvailable: boolean;
  highlight: string;
}

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: "thika",
    name: "Thika Town",
    neighborhoods: "Thika CBD, T-Plaza (Walk-in Kitchen), Section 9, Landless, Makongeni, Thika Greens, Ngoigwa, Blue Post",
    eta: "15 – 30 Mins",
    fee: 250,
    freeThreshold: 4500,
    sameDayAvailable: true,
    highlight: "Baked fresh at our T-Plaza Kitchen, Kenyatta Highway — free walk-in pickup next to Quickmart & Java Thika"
  },
  {
    id: "juja",
    name: "Juja & Environs",
    neighborhoods: "Juja Town, Highpoint, Kenyatta Road, Kalimoni & Juja South Estate",
    eta: "25 – 40 Mins",
    fee: 250,
    freeThreshold: 5000,
    sameDayAvailable: true,
    highlight: "Free delivery may be available depending on location and cake size"
  },
  {
    id: "ruiru",
    name: "Ruiru & Bypass",
    neighborhoods: "Membley Estate, Kamakis, Tatu City, Ruiru Town, Kahawa Sukari & Wendani",
    eta: "30 – 45 Mins",
    fee: 300,
    freeThreshold: 5500,
    sameDayAvailable: true,
    highlight: "Delivery arranged after the cake is ready"
  },
  {
    id: "nairobi",
    name: "Nairobi & Surrounding Areas",
    neighborhoods: "Roysambu, TRM, Kasarani, CBD, Westlands, Kilimani, Lavington, Syokimau",
    eta: "45 – 75 Mins",
    fee: 500,
    freeThreshold: 8500,
    sameDayAvailable: true,
    highlight: "Free delivery may be available depending on location and cake size"
  }
];

export const TESTIMONIALS = [
  {
    id: "google-1",
    name: "Google Review",
    location: "Bafliex Cakes Arena • Thika",
    occasion: "5★ Customer Feedback",
    rating: 5,
    quote: "Did a very good job for my cake. What I wanted is what I got.",
    verifiedDate: "Publicly indexed Google review"
  },
  {
    id: "google-rating",
    name: "Google Customers",
    location: "Bafliex Cakes Arena • Thika",
    occasion: "Google Rating",
    rating: 5,
    quote: "Bafliex Cakes Arena is currently rated 4.8 out of 5 on Google, based on 22 reviews.",
    verifiedDate: "Google rating snapshot"
  },
  {
    id: "google-dishes",
    name: "Popular on Google",
    location: "Bafliex Cakes Arena • Thika",
    occasion: "Popular Cake Orders",
    rating: 5,
    quote: "Google-indexed listings highlight Spider-Man Cake, Frozen Themed Cake and Birthday Cakes among recommended dishes.",
    verifiedDate: "Google-indexed listing"
  }
];

export const PRICING_TIERS = [
  {
    name: "Classic Fresh Cream",
    weight: "1.0 Kg (serves 8–10)",
    price: "From Ksh 1,900",
    servings: "Non-Spongy or Pound base",
    bestFor: "Intimate birthdays, romantic surprises & small family dinners",
    features: [
      "Any classic flavour (mix up to 3 in one cake)",
      "Fresh soft cream icing finish",
      "Personalized topper & candles included",
      "Free cake knife",
      "Same-day may be available — confirm before booking"
    ],
    badge: "Quickest Turnaround",
    popular: false
  },
  {
    name: "Arena Signature (Fondant or Cream)",
    weight: "2.0 Kg (serves 18–24)",
    price: "From Ksh 3,400",
    servings: "Pound, spongy or non-spongy",
    bestFor: "Graduations, milestone birthdays, baby showers & housewarmings",
    features: [
      "Premium flavour combos — up to 3 flavours",
      "Your choice: hard fondant OR fresh cream finish",
      "Custom drip, gold accents, berries & florals",
      "Laser-cut acrylic name topper included",
      "Delivery arranged after the cake is ready"
    ],
    badge: "Most Popular Choice",
    popular: true
  },
  {
    name: "Multi-Tier & Wedding Packages",
    weight: "200 – 350 Guests (10Kg+ setups)",
    price: "Custom estimate",
    servings: "Adjustable to guest count & budget",
    bestFor: "Weddings, Ruracio ceremonies & corporate galas",
    features: [
      "Main tiered cake + side cakes + pre-cut pieces",
      "Wedding setup, stands & cutlery included",
      "Free cake tasting after confirmation",
      "Non-alcoholic champagne & wine glasses",
      "Every package can be adjusted to your preferred design, flavours and budget"
    ],
    badge: "Adjustable Packages",
    popular: false
  }
];

export const FAQ_ITEMS = [
  {
    q: "Where exactly is your cake studio located in Thika Town?",
    a: "We are at T-Plaza Building, 1st Floor, along Kenyatta Highway in Thika Town. The site currently describes the studio as next to Quickmart Supermarket & Java Thika, near KFC Thika. Contact us to confirm current walk-in and pickup availability."
  },
  {
    q: "How quickly can my cake be ready for delivery?",
    a: "Cake preparation takes at least 4 hours after the order is confirmed. Delivery can be arranged once the cake is ready. The actual delivery time depends on your location, traffic conditions and the availability of a delivery person. For detailed or tiered designs, earlier booking is recommended."
  },
  {
    q: "How does ordering & payment work via WhatsApp?",
    a: "It's simple: (1) choose your cake details or use our Custom Cake Builder, (2) send your design inspiration and budget, (3) we confirm availability, design and final price, then (4) we share the payment details and booking requirements for your order."
  },
  {
    q: "How does cake delivery work?",
    a: "We offer free delivery to many locations. Whether delivery is free or attracts a small charge depends on your location and the size of the cake. Delivery is arranged after the cake is ready, which takes at least 4 hours. Delivery timing also depends on location, traffic conditions and the availability of a delivery person."
  },
  {
    q: "Can I send my own photo or Pinterest/Instagram cake design?",
    a: "Absolutely! You can send us screenshots from Pinterest, Instagram, TikTok or your own photos on WhatsApp. Tell us your budget, guest count and what you would like changed, and we will advise on the design, flavours and final price."
  },
  {
    q: "Do you offer special-diet cakes?",
    a: "Yes. Eggless, dairy-free and alcohol-free options can be requested when ordering. Low-sugar cakes are also available. Tell us what you need on WhatsApp so we can confirm the recipe, availability and any price adjustment before you book."
  },
  {
    q: "What's the difference between your pound cakes, sponge cakes, fondant & fresh cream?",
    a: "Pound cakes (banana, carrot, chocolate chip, red velvet & more) are rich, dense and firm — ideal for sculpted multi-tier designs covered in hard fondant icing. Our premium & spongy cakes (Black Forest, Red Velvet Cheese Cream, Amarula) are light, airy and finished in fresh soft cream icing, while our direct display sizes start from Ksh 1,100 for 0.5kg. You can select one flavour or combine 2 or 3 flavours in a single cake."
  },
  {
    q: "How do your wedding cake packages work?",
    a: "Choose the wedding package closest to your guest count, then adjust the cake quantity, design and flavours to suit your wedding. Each package combines a main tiered cake, side cakes and pre-cut pieces, plus setup items. The design, flavours, quantities and delivery can be adjusted to suit your wedding, with custom packages available to suit your guest count, preferences and budget. Wedding cake pricing can change with flavour, design, cake quantity and any extras requested."
  }
];

/* ------------------------------------------------------------------ */
/* OFFICIAL PRICE GRID (from the Bafliex Cakes Arena price list)       */
/* Weights in kg: 0.5, 1, 1.5, 2, 2.5, 3, 4, 5                        */
/* ------------------------------------------------------------------ */

export interface CakePriceTable {
  id: string;
  name: string;
  icing: string;
  blurb: string;
  weights: number[];
  flavors: { name: string; badge?: string; prices: number[] }[];
}

export const PRICE_WEIGHTS = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];

export const CAKE_PRICE_TABLES: CakePriceTable[] = [
  {
    id: "pound-fondant",
    name: "Pound Cakes",
    icing: "Hard Fondant Icing",
    blurb:
      "Rich, dense and sculptable — the professional choice for multi-tier designs, weddings, carved toppers and heavy decorations.",
    weights: PRICE_WEIGHTS,
    flavors: [
      { name: "Vanilla Pound Cake", badge: "Classic", prices: [1700, 2450, 3200, 3950, 4700, 5450, 6950, 8300] },
      { name: "Orange Pound Cake", prices: [1700, 2450, 3200, 3950, 4700, 5450, 6950, 8300] },
      { name: "Banana Pound Cake", prices: [1700, 2400, 3200, 3950, 4700, 5400, 6950, 8300] },
      { name: "Lemon Pound Cake", prices: [1800, 2550, 3300, 4050, 4800, 5550, 7050, 8550] },
      { name: "Red Velvet Pound Cake", badge: "Popular", prices: [1800, 2550, 3300, 4050, 4800, 5550, 7050, 8550] },
      { name: "Carrot Pound Cake", prices: [1800, 2250, 3200, 4050, 4800, 5350, 7050, 8550] },
      { name: "Chocolate Pound Cake", prices: [1600, 2550, 3300, 4050, 4800, 5550, 7050, 8550] },
      { name: "Chocolate Fudge Pound", prices: [2000, 2750, 3500, 4250, 5000, 5750, 7250, 8750] },
      { name: "Chocolate Chip Pound", badge: "Kids Love It", prices: [2300, 3050, 3800, 4550, 5300, 6050, 7550, 9050] },
      { name: "Eggless Pound Cake", badge: "Eggless", prices: [2000, 2750, 3500, 4250, 5000, 5750, 7250, 8750] },
      { name: "Diabetic Pound Cake", badge: "Low Sugar", prices: [2300, 3050, 3800, 4550, 5300, 6050, 7550, 9050] },
      { name: "Rich Fruit Pound Cake", prices: [2200, 3050, 3800, 4550, 5300, 6050, 7550, 9050] },
    ],
  },
  {
    id: "premium-spongy",
    name: "Premium & Spongy Cakes",
    icing: "Fresh Soft Cream Icing",
    blurb:
      "Light, airy showstoppers — Black Forests, Amarula infusions and creamy cheese-cream classics, finished in silky fresh cream.",
    weights: PRICE_WEIGHTS,
    flavors: [
      { name: "Black Forest Cake", badge: "Bestseller", prices: [1600, 2100, 3050, 3800, 4300, 5000, 6900, 8300] },
      { name: "White Forest Cake", prices: [1900, 2550, 3100, 3750, 4300, 5000, 6750, 8300] },
      { name: "Red Velvet Cheese Cream", badge: "Crowd Favorite", prices: [2300, 2550, 3600, 4650, 5150, 5850, 7500, 8600] },
      { name: "Chocolate Fudge (Spongy)", prices: [2200, 2650, 3600, 4650, 5150, 5850, 7500, 8600] },
      { name: "Blueberry Fruit Cake", prices: [2000, 2650, 3600, 4650, 5150, 5850, 7500, 9000] },
      { name: "Amarula Vanilla Cream", badge: "Adults Only", prices: [1800, 2250, 3200, 4350, 5000, 5650, 7300, 9000] },
      { name: "Amarula Black Forest", prices: [1800, 2200, 3100, 4050, 4600, 5100, 6900, 8300] },
      { name: "Chocolate Milk Cake", prices: [1800, 2550, 3300, 4050, 4800, 5550, 7050, 8550] },
      { name: "Caramel Milk Cake", prices: [1900, 2350, 3000, 3750, 4300, 5250, 6750, 8250] },
      { name: "Pink Champagne Cake", badge: "Celebration", prices: [1700, 2450, 2800, 3550, 3950, 4550, 6950, 9200] },
      { name: "Rich Fruit Cake", badge: "Weddings", prices: [3000, 3550, 4550, 5650, 6400, 7150, 9400, 11400] },
    ],
  },
  {
    id: "non-spongy-cream",
    name: "Non-Spongy Classics",
    icing: "Fresh Soft Cream Icing",
    blurb:
      "Everyday celebration heroes — moist, generous and budget-friendly without ever tasting ordinary. From just Ksh 950.",
    weights: PRICE_WEIGHTS,
    flavors: [
      { name: "Vanilla Cake", badge: "Classic", prices: [950, 1650, 2400, 2900, 3650, 4400, 5150, 5900] },
      { name: "Banana Cake", prices: [950, 1650, 2400, 2900, 3650, 4400, 5150, 6600] },
      { name: "Marble Cake", prices: [950, 1650, 2400, 2900, 3650, 4400, 5150, 6650] },
      { name: "Chocolate Cake", prices: [1050, 1750, 2500, 3000, 3750, 4500, 5250, 6750] },
      { name: "Chocolate Orange Cake", prices: [1000, 1700, 2450, 2950, 3700, 4450, 5200, 6700] },
      { name: "Carrot Cake", prices: [1050, 1750, 2500, 3000, 3750, 4500, 5250, 6750] },
      { name: "Passion Cake", prices: [1050, 1750, 2500, 3000, 3750, 4500, 5250, 6750] },
      { name: "Red Velvet (Cream)", badge: "Popular", prices: [1050, 1750, 2500, 3000, 3750, 4500, 5250, 6000] },
      { name: "Coconut Cake", prices: [1250, 1950, 2700, 3200, 3950, 4700, 5450, 6950] },
      { name: "Eggless Cake", badge: "Eggless", prices: [1550, 2250, 3000, 3500, 4250, 5000, 5750, 7250] },
      { name: "Diabetic Cake", badge: "Low Sugar", prices: [2050, 2750, 3500, 4000, 4750, 5500, 6250, 7750] },
      { name: "Fruit Cake", prices: [1550, 2250, 3000, 3500, 4250, 5000, 5750, 7250] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* WEDDING CAKE PACKAGES (official catalogue, adjustable from 20k)     */
/* ------------------------------------------------------------------ */

export interface WeddingPackage {
  id: string;
  name: string;
  guests: string;
  totalSize: string;
  priceRange: string;
  flavorsNote: string;
  image: string;
  deliverables: string[];
  badge?: string;
  popular?: boolean;
}

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: "emerald-200",
    name: "The Emerald Collection",
    guests: "200 – 250 Guests",
    totalSize: "10.5 Kgs + 50 Pre-cut Cakes",
    priceRange: "Ksh 27,000 – 30,000",
    flavorsNote: "Combination of up to 3 flavours",
    image: "/images/cake-gold-drip.jpg",
    badge: "Great Value",
    deliverables: [
      "Main cake — 6 Kgs, 5 tiers",
      "6 side cakes (¾ kg each)",
      "50 pre-cut cake pieces",
      "Wedding setup, stands & cutlery",
      "2 sets of wine glasses",
      "Non-alcoholic champagne",
      "Free cake tasting after confirmation",
      "Transport / delivery — negotiable",
    ],
  },
  {
    id: "sapphire-250",
    name: "The Sapphire Collection",
    guests: "250 – 300 Guests",
    totalSize: "10 Kgs + Pre-cut Cakes",
    priceRange: "Ksh 26,000 – 30,000",
    flavorsNote: "Combination of up to 3 flavours",
    image: "/images/cake-wedding.jpg",
    badge: "Most Booked",
    popular: true,
    deliverables: [
      "Main cake — 6 Kgs, 3 tiers",
      "4 side cakes (1 kg each)",
      "50 pre-cut cake pieces",
      "Wedding setup, stands & cutlery",
      "2 sets of wine glasses",
      "Non-alcoholic champagne",
      "Free cake tasting after confirmation",
      "FREE Anniversary Cake",
      "Transport / delivery — negotiable",
    ],
  },
  {
    id: "royal-300",
    name: "The Royal Collection",
    guests: "300 – 350 Guests",
    totalSize: "11 Kgs + 100 Pre-cut Cakes",
    priceRange: "Ksh 28,500 – 33,500",
    flavorsNote: "Combination of up to 3 flavours",
    image: "/images/cake-ruracio.jpg",
    badge: "Grand Luxury",
    deliverables: [
      "Main cake — 6 Kgs, 3 tiers",
      "5 side cakes (1 kg each)",
      "100 pre-cut cake pieces",
      "Wedding setup, stands & cutlery",
      "2 sets of wine glasses",
      "Non-alcoholic champagne",
      "Free cake tasting after confirmation",
      "FREE Anniversary Cake",
      "Transport / delivery — negotiable",
    ],
  },
];
