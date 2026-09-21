export type InspoCategory =
  | "All Cakes"
  | "Cartoon Cakes"
  | "Teen Cakes"
  | "Men's Cakes"
  | "Women's Cakes"
  | "Corporate Cakes"
  | "Wedding Cakes"
  | "Bridal Shower Cakes"
  | "Church & Religious Cakes"
  | "Anniversary Cakes"
  | "Dowry & Ruracio Cakes"
  | "Graduation Cakes"
  | "Rite of Passage Cakes"
  | "House Warming Cakes"
  | "Baby Shower & Gender Reveal"
  | "Birthday & Milestones";

export interface InspirationCake {
  id: string;
  src: string;
  thumbSrc: string;
  title: string;
  category: InspoCategory;
  subcategories: string[];
  tags: string[];
  alt: string;
}

export const INSPO_CATEGORIES: InspoCategory[] = [
  "All Cakes",
  "Cartoon Cakes",
  "Teen Cakes",
  "Men's Cakes",
  "Women's Cakes",
  "Corporate Cakes",
  "Wedding Cakes",
  "Bridal Shower Cakes",
  "Church & Religious Cakes",
  "Anniversary Cakes",
  "Dowry & Ruracio Cakes",
  "Graduation Cakes",
  "Rite of Passage Cakes",
  "House Warming Cakes",
  "Baby Shower & Gender Reveal",
  "Birthday & Milestones",
];

export const INSPIRATION_GALLERY: InspirationCake[] = [
  { id: "housewarming-home", src: "/images/cake-housewarming.jpg", thumbSrc: "/images/gallery/thumbs/cake-housewarming.webp", title: "New Home Celebration Cake", category: "House Warming Cakes", subcategories: ["House Warming Cakes"], tags: ["house warming", "new home", "keys", "home"], alt: "House warming cake by Bafliex Cakes Arena" },
  { id: "corporate-classic", src: "/images/cake-corporate.jpg", thumbSrc: "/images/gallery/thumbs/cake-corporate.webp", title: "Corporate Celebration Cake", category: "Corporate Cakes", subcategories: ["Corporate Cakes"], tags: ["corporate", "office", "branded", "company"], alt: "Corporate celebration cake by Bafliex Cakes Arena" },
  { id: "babyshower-classic", src: "/images/cake-babyshower.jpg", thumbSrc: "/images/gallery/thumbs/cake-babyshower.webp", title: "Pastel Baby Shower Cake", category: "Baby Shower & Gender Reveal", subcategories: ["Baby Shower"], tags: ["baby shower", "gender reveal", "pastel", "baby"], alt: "Pastel baby shower cake by Bafliex Cakes Arena" },
  { id: "ruracio-showcase", src: "/images/cake-ruracio.jpg", thumbSrc: "/images/gallery/thumbs/cake-ruracio.webp", title: "Ruracio Heritage Cake", category: "Dowry & Ruracio Cakes", subcategories: ["Traditional Cakes", "Wedding Cakes"], tags: ["ruracio", "dowry", "traditional", "heritage"], alt: "Ruracio heritage cake by Bafliex Cakes Arena" },
  { id: "wedding-showcase", src: "/images/cake-wedding.jpg", thumbSrc: "/images/gallery/thumbs/cake-wedding.webp", title: "Ivory & Gold Wedding Cake", category: "Wedding Cakes", subcategories: ["Wedding Cakes", "Bridal Shower Cakes"], tags: ["wedding", "ivory", "gold", "flowers", "tiered"], alt: "Ivory and gold wedding cake by Bafliex Cakes Arena" },
  { id: "turquoise-wedding", src: "/images/gallery/wedding-turquoise.webp", thumbSrc: "/images/gallery/thumbs/wedding-turquoise.webp", title: "Turquoise Multi-Cake Wedding Setup", category: "Wedding Cakes", subcategories: ["Wedding Cakes"], tags: ["wedding", "multi tier", "side cakes", "turquoise", "floral"], alt: "Turquoise and pink multi-cake wedding setup by Bafliex Cakes Arena" },
  { id: "traditional-green", src: "/images/gallery/traditional-green.webp", thumbSrc: "/images/gallery/thumbs/traditional-green.webp", title: "Green Traditional Celebration Cake", category: "Dowry & Ruracio Cakes", subcategories: ["Traditional Cakes", "Birthday & Milestones"], tags: ["traditional", "green", "celebration", "one", "custom"], alt: "Green traditional style celebration cake by Bafliex Cakes Arena" },
  { id: "celebration-bottle", src: "/images/gallery/celebration-bottle.webp", thumbSrc: "/images/gallery/thumbs/celebration-bottle.webp", title: "Cheers Celebration Cake", category: "Anniversary Cakes", subcategories: ["Women's Cakes", "Men's Cakes"], tags: ["cheers", "celebration", "milestone", "bottle", "gold"], alt: "Celebration cake with bottle design by Bafliex Cakes Arena" },
  { id: "cartoon-rainbow", src: "/images/gallery/cartoon-rainbow.webp", thumbSrc: "/images/gallery/thumbs/cartoon-rainbow.webp", title: "Bright Cartoon Birthday", category: "Cartoon Cakes", subcategories: ["Girls Cartoon Cakes", "Birthday & Milestones"], tags: ["cartoon", "girls", "rainbow", "birthday", "kids"], alt: "Bright cartoon birthday cake by Bafliex Cakes Arena" },
  { id: "birthday-mary", src: "/images/gallery/birthday-mary.webp", thumbSrc: "/images/gallery/thumbs/birthday-mary.webp", title: "Elegant Mary Birthday Cake", category: "Women's Cakes", subcategories: ["Ladies Cakes", "Mom Cakes", "Birthday & Milestones"], tags: ["mary", "women", "ladies", "mom", "birthday", "elegant"], alt: "Elegant birthday cake for Mary by Bafliex Cakes Arena" },
  { id: "cartoon-boy-arlin", src: "/images/gallery/cartoon-boy-arlin.webp", thumbSrc: "/images/gallery/thumbs/cartoon-boy-arlin.webp", title: "Baby Boy Name Cake", category: "Cartoon Cakes", subcategories: ["Boys Cartoon Cakes", "Baby Shower & Gender Reveal"], tags: ["boy", "baby", "bear", "name", "blue"], alt: "Blue baby boy themed cake by Bafliex Cakes Arena" },
  { id: "girls-birthday-6", src: "/images/gallery/girls-birthday-6.webp", thumbSrc: "/images/gallery/thumbs/girls-birthday-6.webp", title: "Girls Cartoon Birthday", category: "Cartoon Cakes", subcategories: ["Girls Cartoon Cakes", "Birthday & Milestones"], tags: ["girls", "birthday", "cartoon", "pink", "age 6"], alt: "Girls cartoon birthday cake by Bafliex Cakes Arena" },
  { id: "police-congratulations", src: "/images/gallery/police-congratulations.webp", thumbSrc: "/images/gallery/thumbs/police-congratulations.webp", title: "Police / Achievement Cake", category: "Men's Cakes", subcategories: ["Corporate Cakes", "Rite of Passage Cakes"], tags: ["police", "achievement", "congratulations", "men", "uniform"], alt: "Police themed congratulations cake by Bafliex Cakes Arena" },
  { id: "gshark-40", src: "/images/gallery/gshark-40.webp", thumbSrc: "/images/gallery/thumbs/gshark-40.webp", title: "40th Birthday Faith & Purpose Cake", category: "Men's Cakes", subcategories: ["Church & Religious Cakes", "Birthday & Milestones"], tags: ["40th", "men", "faith", "bible", "birthday"], alt: "Faith themed 40th birthday cake by Bafliex Cakes Arena" },
  { id: "joy-claire", src: "/images/gallery/joy-claire-butterflies.webp", thumbSrc: "/images/gallery/thumbs/joy-claire-butterflies.webp", title: "Butterfly Milestone Cake", category: "Women's Cakes", subcategories: ["Ladies Cakes", "Birthday & Milestones"], tags: ["butterfly", "women", "birthday", "pink", "purple"], alt: "Pink and purple butterfly milestone cake by Bafliex Cakes Arena" },
  { id: "graduation-pink", src: "/images/gallery/graduation-pink.webp", thumbSrc: "/images/gallery/thumbs/graduation-pink.webp", title: "Graduation Celebration", category: "Graduation Cakes", subcategories: ["Graduation Cakes"], tags: ["graduation", "cap", "flowers", "achievement"], alt: "Graduation celebration cake by Bafliex Cakes Arena" },
  { id: "mum-wakanmuna", src: "/images/gallery/mum-wakanmuna.webp", thumbSrc: "/images/gallery/thumbs/mum-wakanmuna.webp", title: "Mum Celebration Cake", category: "Women's Cakes", subcategories: ["Mom Cakes", "Ladies Cakes", "Birthday & Milestones"], tags: ["mum", "mom", "birthday", "purple", "gold"], alt: "Mum celebration cake by Bafliex Cakes Arena" },
  { id: "bebefinn", src: "/images/gallery/bebefinn-girls.webp", thumbSrc: "/images/gallery/thumbs/bebefinn-girls.webp", title: "Bebefinn Cartoon Cake", category: "Cartoon Cakes", subcategories: ["Girls Cartoon Cakes", "Birthday & Milestones"], tags: ["bebefinn", "girls", "cartoon", "pink", "children"], alt: "Bebefinn cartoon birthday cake by Bafliex Cakes Arena" },
  { id: "heart-birthday", src: "/images/gallery/heart-shape-birthday.webp", thumbSrc: "/images/gallery/thumbs/heart-shape-birthday.webp", title: "Heart Shape Birthday Cakes", category: "Women's Cakes", subcategories: ["Ladies Cakes", "Birthday & Milestones"], tags: ["heart", "birthday", "girls", "women", "pink", "purple"], alt: "Heart shaped celebration cakes by Bafliex Cakes Arena" },
  { id: "oh-baby", src: "/images/gallery/oh-baby.webp", thumbSrc: "/images/gallery/thumbs/oh-baby.webp", title: "Oh Baby Celebration Cake", category: "Baby Shower & Gender Reveal", subcategories: ["Baby Shower"], tags: ["baby", "baby shower", "blue", "gold", "gender reveal"], alt: "Oh Baby celebration cake by Bafliex Cakes Arena" },
  { id: "unicorn-girl", src: "/images/gallery/unicorn-girl.webp", thumbSrc: "/images/gallery/thumbs/unicorn-girl.webp", title: "Unicorn Girls Birthday", category: "Cartoon Cakes", subcategories: ["Girls Cartoon Cakes", "Birthday & Milestones"], tags: ["unicorn", "girls", "rainbow", "birthday", "age 4"], alt: "Unicorn themed girls birthday cake by Bafliex Cakes Arena" },
  { id: "basketball-teen", src: "/images/gallery/basketball-teen.webp", thumbSrc: "/images/gallery/thumbs/basketball-teen.webp", title: "Teen Basketball Birthday", category: "Teen Cakes", subcategories: ["Teen Boys Cakes", "Sports Theme"], tags: ["teen", "boys", "basketball", "sports", "age 14"], alt: "Teen basketball birthday cake by Bafliex Cakes Arena" },
  { id: "church-pcmf", src: "/images/gallery/church-pcmf.webp", thumbSrc: "/images/gallery/thumbs/church-pcmf.webp", title: "Church Ministry Cake", category: "Church & Religious Cakes", subcategories: ["Church Cakes", "Religious Cakes"], tags: ["church", "pcmf", "prayer", "religious", "ministry"], alt: "Church ministry themed cake by Bafliex Cakes Arena" },
  { id: "pcea-womens-guild", src: "/images/gallery/pcea-womens-guild.webp", thumbSrc: "/images/gallery/thumbs/pcea-womens-guild.webp", title: "Women's Guild Celebration Cake", category: "Church & Religious Cakes", subcategories: ["Church Cakes", "Women's Cakes"], tags: ["church", "womens guild", "women", "celebration", "pcea"], alt: "Women's Guild celebration cake by Bafliex Cakes Arena" },
  { id: "stitch-teen-girl", src: "/images/gallery/stitch-teen-girl.webp", thumbSrc: "/images/gallery/thumbs/stitch-teen-girl.webp", title: "Stitch Teen Birthday", category: "Teen Cakes", subcategories: ["Teen Girls Cakes", "Cartoon Cakes"], tags: ["stitch", "teen", "girls", "birthday", "13"], alt: "Stitch themed teen birthday cake by Bafliex Cakes Arena" },
  { id: "mary-religious", src: "/images/gallery/mary-congratulations.webp", thumbSrc: "/images/gallery/thumbs/mary-congratulations.webp", title: "Congratulations Religious Cake", category: "Church & Religious Cakes", subcategories: ["Church Cakes", "Religious Cakes", "Graduation Cakes"], tags: ["religious", "church", "congratulations", "mary", "blue"], alt: "Religious congratulations cake by Bafliex Cakes Arena" },
  { id: "lilian-first-birthday", src: "/images/gallery/lilian-first-birthday.webp", thumbSrc: "/images/gallery/thumbs/lilian-first-birthday.webp", title: "First Birthday Princess Cake", category: "Rite of Passage Cakes", subcategories: ["Girls Cartoon Cakes", "Birthday & Milestones"], tags: ["first birthday", "one", "girls", "princess", "pink"], alt: "First birthday princess cake by Bafliex Cakes Arena" },
  { id: "absa-world-cup", src: "/images/gallery/absa-world-cup.webp", thumbSrc: "/images/gallery/thumbs/absa-world-cup.webp", title: "Corporate Football Celebration Cake", category: "Corporate Cakes", subcategories: ["Sports Theme", "Corporate"], tags: ["absa", "corporate", "football", "world cup", "branded"], alt: "ABSA branded corporate football cake by Bafliex Cakes Arena" },
  { id: "faith-gold", src: "/images/gallery/faith-gold-birthday.webp", thumbSrc: "/images/gallery/thumbs/faith-gold-birthday.webp", title: "Faith Gold & Purple Birthday", category: "Women's Cakes", subcategories: ["Ladies Cakes", "Mom Cakes", "Birthday & Milestones"], tags: ["women", "faith", "gold", "purple", "birthday"], alt: "Gold and purple birthday cake by Bafliex Cakes Arena" },
  { id: "husband-daddy", src: "/images/gallery/husband-daddy-prayer.webp", thumbSrc: "/images/gallery/thumbs/husband-daddy-prayer.webp", title: "Husband Daddy Prayer Partner Cake", category: "Men's Cakes", subcategories: ["Gentlemen Cakes", "Church & Religious Cakes"], tags: ["husband", "daddy", "men", "prayer", "religious"], alt: "Husband Daddy Prayer Partner celebration cake by Bafliex Cakes Arena" },
  { id: "holy-communion", src: "/images/gallery/holy-communion.webp", thumbSrc: "/images/gallery/thumbs/holy-communion.webp", title: "Holy Communion Celebration", category: "Church & Religious Cakes", subcategories: ["Religious Cakes", "Rite of Passage Cakes"], tags: ["holy communion", "church", "religious", "bible", "communion"], alt: "Holy Communion celebration cake by Bafliex Cakes Arena" },
  { id: "dr-mathida", src: "/images/gallery/dr-mathida-graduation.webp", thumbSrc: "/images/gallery/thumbs/dr-mathida-graduation.webp", title: "Medical Graduation Cake", category: "Graduation Cakes", subcategories: ["Graduation Cakes", "Rite of Passage Cakes"], tags: ["graduation", "medical", "doctor", "phd", "academic"], alt: "Medical graduation cake by Bafliex Cakes Arena" },
];
