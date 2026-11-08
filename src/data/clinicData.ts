export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: "HAIR" | "SKIN" | "LASER" | "MAKEUP" | "NAIL" | "NUTRITION" | "SPA" | "PMU" | "BODY";
  tagline: string;
  description: string;
  highlights: string[];
  duration: string;
  image: string;
  popularFor: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "Skin" | "Hair" | "Sun Protection" | "Elixir";
  price: number;
  originalPrice?: number;
  volume: string;
  description: string;
  keyIngredients: string[];
  image: string;
  inStock: boolean;
  rating: number;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
}

export const CLINIC_INFO = {
  name: "S Fvour",
  legalName: "S Fvour Group By - M Scissors",
  brandSubtitle: "GROUP BY - M SCISSORS",
  categoryHeadline: "COSMETOLOGY & AESTHETIC SKIN HUB",
  subheading: "A Rare Combination of Luxurious Ambience • Premium Quality • Value for Money • Customer Satisfaction",
  phonePrimary: "+91 7378603232",
  phoneSecondary: "+91 7378603232",
  phoneDigits: "917378603232",
  whatsappNumber: "917378603232",
  instagramUrl: "https://www.instagram.com/m_scissors_group?dlrf=MWxhdGI4NHFsYTZweg==",
  instagramHandle: "@m_scissors_group",
  addressFull: "2nd Floor, Shop No.003, Near Subhadra Cinemas, Subhadra Mall, Pencil Chowk, Baramati MIDC, Baramati, Dist. Pune 413133",
  addressShort: "Subhadra Mall, Pencil Chowk, Baramati MIDC, Pune 413133",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Subhadra+Mall+Pencil+Chowk+Baramati+MIDC+Pune",
  workingHours: "Monday – Sunday: 10:00 AM – 9:00 PM",
  agencyCredit: "Crafted by NRAVIXA",
  agencyUrl: "https://nravixa.vercel.app",
};

export const PILLARS: PillarItem[] = [
  {
    id: "ambience",
    title: "Luxurious Ambience",
    subtitle: "Sanctuary of Tranquility",
    description: "Architectural five-star clinic interiors crafted with warm ambient lighting, private consultation suites, and soothing acoustics to elevate your comfort.",
    icon: "Gem",
    badge: "5-Star Clinic Comfort",
  },
  {
    id: "quality",
    title: "Premium Quality",
    subtitle: "Medical-Grade Precision",
    description: "Gold-standard US-FDA approved laser technologies, clinically proven active formulations, and protocols administered by certified aesthetic practitioners.",
    icon: "ShieldCheck",
    badge: "US-FDA Approved Tech",
  },
  {
    id: "value",
    title: "Value For Money",
    subtitle: "Transparent Excellence",
    description: "Honest, personalized treatment plans tailored to your skin & hair biology with no hidden fees or unnecessary add-ons. Maximum clinical ROI.",
    icon: "Coins",
    badge: "Honest Custom Plans",
  },
  {
    id: "satisfaction",
    title: "Customer Satisfaction",
    subtitle: "Client-First Promise",
    description: "Over 5,000+ satisfied clients across Baramati and Pune. Comprehensive pre-treatment skin mapping and attentive post-procedure follow-up care.",
    icon: "HeartHandshake",
    badge: "99% Client Approval",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "skin",
    name: "Skin Aesthetics & Cosmetology",
    shortTag: "SKIN",
    category: "SKIN",
    tagline: "Medical-Grade Radiance, Acne Clearance & Youth Restoration",
    description: "From signature multi-step HydraFacials to medical peels and collagen remodeling, our dermat-guided aesthetic skin hub restores your natural, luminous glass skin.",
    highlights: [
      "Signature Deep HydraFacial MD with Serum Infusion",
      "Medical Chemical Peels (Glycolic, Salicylic, Yellow Peel)",
      "Active Acne & Post-Acne Scar Subcision Therapy",
      "Melasma, Pigmentation & Sun-Damage Correction",
      "Non-Surgical Skin Tightening & Collagen Remodeling",
      "Carbon Laser Hollywood Glow Peel",
    ],
    duration: "45 – 75 mins",
    image: "/images/service-skin.jpg",
    popularFor: "HydraFacials & Acne Scar Treatments",
  },
  {
    id: "hair",
    name: "Trichology & Hair Restoration",
    shortTag: "HAIR",
    category: "HAIR",
    tagline: "Advanced Scalp Rejuvenation, PRP & Follicle Revival",
    description: "Comprehensive trichology solutions to halt hair thinning, reverse stubborn dandruff, stimulate dormant hair roots, and restore vibrant scalp wellness.",
    highlights: [
      "Advanced Autologous PRP Scalp Therapy",
      "Meso-Hair Follicle Nutrient Infiltration",
      "Clinical Anti-Dandruff & Scalp Microbiome Detox",
      "Japanese Luxury Scalp Spa with Acupressure",
      "Low-Level Laser Hair Stimulation (LLLT)",
      "Customized Hair Fall Arrest Regimens",
    ],
    duration: "60 – 90 mins",
    image: "/images/service-hair.jpg",
    popularFor: "PRP & Hair Thinning Control",
  },
  {
    id: "laser",
    name: "Advanced Painless Laser Clinic",
    shortTag: "LASER",
    category: "LASER",
    tagline: "Triple-Wavelength Painless Laser Hair Reduction & Resurfacing",
    description: "Equipped with state-of-the-art contact cooling technology, our laser suites deliver silky, hair-free skin and refined texture with zero burns and absolute comfort.",
    highlights: [
      "Triple-Wavelength Painless Laser Hair Reduction (All Skin Tones)",
      "Full Body, Facial, Beard Shaping & Underarm Packages",
      "Laser Carbon Peel for Instant Pore Shrinking & Radiance",
      "Q-Switched Laser for Sun Spots, Freckles & Tattoo Removal",
      "Sub-zero Contact Chilling for 100% Pain-Free Sessions",
      "Permanent Hair Reduction with Long-Term Smoothness",
    ],
    duration: "30 – 120 mins",
    image: "/images/service-laser.jpg",
    popularFor: "Full Body Painless Laser",
  },
  {
    id: "makeup",
    name: "Bridal & HD Glamour Artistry",
    shortTag: "MAKEUP",
    category: "MAKEUP",
    tagline: "Celebrity-Grade Bridal, HD Airbrush & Event Artistry",
    description: "Celebrate life's grandest milestones with bespoke bridal makeovers, high-definition camera-ready contouring, and international luxury cosmetic brands.",
    highlights: [
      "Signature Luxury Bridal Makeover & Draping",
      "Flawless HD Airbrush Waterproof Makeup",
      "Pre-Wedding, Engagement & Sangeet Glamour Looks",
      "Editorial, Reception & Red Carpet Styling",
      "Skin-Prep Glow Facials Prior to Application",
      "Premium International Brands (MAC, Huda, Charlotte Tilbury)",
    ],
    duration: "90 – 180 mins",
    image: "/images/service-makeup.jpg",
    popularFor: "Bridal & Airbrush Makeovers",
  },
  {
    id: "nail",
    name: "Nail Sculpting & Couture Art",
    shortTag: "NAIL",
    category: "NAIL",
    tagline: "Gel Extensions, 3D Chrome Art & Luxury Manicures",
    description: "Turn your nails into a masterwork. Our expert nail technicians provide damage-free sculpting, Russian cuticle care, and avant-garde luxury finishes.",
    highlights: [
      "Russian Gel Manicure with Meticulous Cuticle Care",
      "Sculpted Acrylic & Polygel Extensions",
      "Trendsetting Chrome, French Ombré & 3D Crystal Embellishments",
      "Natural Nail Keratin Strengthening Overlays",
      "Spa Deluxe Pedicure with Paraffin Hydration Treatment",
      "Long-Lasting, Chip-Resistant High-Gloss Formulations",
    ],
    duration: "60 – 90 mins",
    image: "/images/service-nail.jpg",
    popularFor: "Gel Extensions & Chrome Nail Art",
  },
  {
    id: "nutrition",
    name: "Clinical Nutrition & Glow Wellness",
    shortTag: "NUTRITION",
    category: "NUTRITION",
    tagline: "Gut-Skin Axis Optimization & Metabolic Health",
    description: "Radiant skin and thick hair begin within. Our clinical nutritionist designs personalized, sustainable dietary protocols targeting inflammation, hormones, and cellular vitality.",
    highlights: [
      "Personalized Gut-Skin Microbiome Rebalancing Protocol",
      "Dietary Blueprints for Hormonal Acne & PCOS",
      "Metabolic Weight Loss & Sustainable Fat Reduction",
      "Hair Growth Micronutrient & Vitamin Deficiency Mapping",
      "Anti-Inflammatory Glow & Detox Nutrition Plans",
      "One-on-One Lifestyle Coaching & Bi-Weekly Tracking",
    ],
    duration: "45 – 60 mins",
    image: "/images/service-nutrition.jpg",
    popularFor: "PCOS & Acne Glow Diet Plans",
  },
  {
    id: "spa",
    name: "Therapeutic Spa & Holistic Detox",
    shortTag: "SPA",
    category: "SPA",
    tagline: "Aromatherapy Body Polishing, Deep Relaxation & Rituals",
    description: "Unwind in our serene spa suite with therapeutic body polishes, herbal steam, soothing botanical oils, and stress-releasing wellness rituals.",
    highlights: [
      "Luxury Whole-Body Exfoliation & Gold Shimmer Polish",
      "Deep Swedish Muscle Tension Release Massage",
      "Balinese Aromatherapy Relaxation Ritual",
      "Detoxifying Mineral Mud & Sea Kelp Body Cocoon",
      "Herbal Steam Infusion & Hot Towel Therapy",
      "Private Ambient Treatment Suite with Soothing Zen Acoustics",
    ],
    duration: "60 – 120 mins",
    image: "/images/service-spa.jpg",
    popularFor: "Full Body Polish & Relaxation",
  },
  {
    id: "pmu",
    name: "Semi-Permanent Makeup & Microblading",
    shortTag: "PMU",
    category: "PMU",
    tagline: "Hyper-Realistic 3D Brows, Velvet Lip Blush & BB Glow",
    description: "Frame your facial symmetry with ultra-fine hair-stroke microblading, ombré powder shading, velvet lip pigmentation, and semi-permanent BB glow complexion refinement.",
    highlights: [
      "Signature Feather-Stroke 3D Microblading",
      "Ombré Powder Brows for Soft Natural Fullness",
      "Hydra Velvet Lip Blushing & Neutralization",
      "Precision Lash-Line Enhancement Eyeliner",
      "Korean BB Glow Complexion Tone Evener",
      "Hypoallergenic Organic Pigments & Sterile One-Time Blades",
    ],
    duration: "90 – 150 mins",
    image: "/images/service-pmu.jpg",
    popularFor: "Eyebrow Microblading & Lip Blush",
  },
  {
    id: "body",
    name: "Body Contouring & Non-Surgical Slimming",
    shortTag: "BODY",
    category: "BODY",
    tagline: "Cryolipolysis Fat Freezing, RF Tightening & Inch Loss",
    description: "Sculpt and define your silhouette with US-FDA approved cryolipolysis, ultrasonic cavitation, and radiofrequency skin tightening for targeted, non-invasive inch reduction.",
    highlights: [
      "Cryolipolysis Non-Surgical Fat Freezing (Sub-Zero)",
      "Ultrasonic Cavitation for Stubborn Belly & Thighs",
      "Radiofrequency (RF) Skin Tightening & Cellulite Smoothing",
      "Targeted Inch-Loss Waist & Love-Handle Contouring",
      "Post-Maternity Abdominal Firming & Stretch Mark Refinement",
      "Non-Invasive, Painless Protocol with Zero Downtime",
    ],
    duration: "60 – 90 mins",
    image: "/images/service-body.jpg",
    popularFor: "Fat Freezing & Body Contouring",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "serum-c",
    name: "S Fvour Clinical C-Glow 20% Radiance Serum",
    category: "Skin",
    price: 1499,
    originalPrice: 1999,
    volume: "30 ml",
    description: "Pure Ethyl Ascorbic Acid stabilized with Ferulic Acid and Hyaluronic Acid for intense illumination, dark spot fading, and collagen protection.",
    keyIngredients: ["20% Vitamin C", "0.5% Ferulic Acid", "1% Hyaluronic Acid"],
    image: "/images/product-skincare.jpg",
    inStock: true,
    rating: 4.9,
  },
  {
    id: "barrier-creme",
    name: "S Fvour Bio-Ceramide & Peptide Barrier Crème",
    category: "Skin",
    price: 1299,
    originalPrice: 1699,
    volume: "50 g",
    description: "Rich yet lightweight lipid-replenishing moisture barrier repair crème with 5 essential ceramides, squalane, and copper tripeptides.",
    keyIngredients: ["5x Ceramide Complex", "Pure Plant Squalane", "Copper Tripeptide-1"],
    image: "/images/product-skincare.jpg",
    inStock: true,
    rating: 4.8,
  },
  {
    id: "sun-shield",
    name: "S Fvour Triple-Defense Invisible Sun Shield SPF 50+ PA++++",
    category: "Sun Protection",
    price: 999,
    originalPrice: 1299,
    volume: "50 ml",
    description: "Ultra-matte, water-resistant broad spectrum sunscreen with zero white cast, infused with Centella Asiatica for post-laser soothing.",
    keyIngredients: ["Hybrid UV Filters", "Centella Asiatica", "Niacinamide"],
    image: "/images/product-skincare.jpg",
    inStock: true,
    rating: 5.0,
  },
  {
    id: "hair-peptides",
    name: "S Fvour Trichology Redensifying Hair Peptide Drops",
    category: "Hair",
    price: 1699,
    originalPrice: 2299,
    volume: "50 ml",
    description: "Advanced trichological scalp drops with Redensyl, Procapil, and Anagain to awaken dormant follicles and arrest shedding.",
    keyIngredients: ["3% Redensyl", "3% Procapil", "Biotinoyl Tripeptide"],
    image: "/images/service-hair.jpg",
    inStock: true,
    rating: 4.9,
  },
];

export const FAQS = [
  {
    question: "Is the laser hair reduction treatment at S Fvour really painless?",
    answer: "Yes, absolutely! We employ the latest triple-wavelength laser system equipped with integrated sub-zero sapphire contact cooling. The skin surface remains pleasantly chilled while the laser gently targets the root of the hair follicle, resulting in a sensation similar to a soothing massage without burns or pain.",
  },
  {
    question: "Where is S Fvour located in Baramati, and how do I reach?",
    answer: "We are centrally located at 2nd Floor, Shop No. 003, Subhadra Mall, Near Subhadra Cinemas, Pencil Chowk, Baramati MIDC, Baramati (Dist. Pune 413133). Subhadra Mall has ample parking and is easily accessible from all parts of Baramati.",
  },
  {
    question: "How do I book an appointment or consultation via WhatsApp?",
    answer: "Simply use our quick booking form on this website or tap any 'Book on WhatsApp' button. Your details (name, preferred service, date, and concerns) will automatically format into a ready WhatsApp message sent directly to our reception team at +91 7378603232 for instant confirmation.",
  },
  {
    question: "How many sessions are recommended for HydraFacial or Chemical Peels?",
    answer: "Clients notice an immediate dewy glow and refined texture after just one session. For persistent issues such as acne scars, melasma, or fine lines, our aesthetic practitioners typically recommend a personalized series of 4 to 6 sessions spaced 3 to 4 weeks apart.",
  },
  {
    question: "How far in advance should brides book bridal makeup & pre-bridal skin prep?",
    answer: "We recommend booking bridal slots 1 to 3 months in advance, especially during wedding seasons. Starting clinical skin and hair prep 4 to 8 weeks before your big day ensures flawless, radiant skin requiring minimal foundation.",
  },
  {
    question: "Can I purchase the clinical skincare products online or get them delivered?",
    answer: "Yes! You can browse our clinical product range directly on this website and tap 'Order on WhatsApp'. Our team will prepare your order, coordinate payment, and arrange doorstep delivery across Baramati and Pune.",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  category: "all" | "skin" | "laser" | "hair" | "bridal";
  service: string;
  divisionTag: string;
  rating: number;
  location: string;
  date: string;
  highlight: string;
  review: string;
  verified: boolean;
  tags: string[];
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Pooja Deshmukh",
    category: "skin",
    service: "Medical HydraFacial MD & Custom Serums",
    divisionTag: "Division 01: Skin Longevity",
    rating: 5,
    location: "Baramati MIDC",
    date: "October 2026",
    highlight: "Noticeable cellular radiance within 48 hours without any peeling",
    review: "The clinical atmosphere at S Fvour feels like a top-tier Mumbai dermatology center right here at Subhadra Mall. Dr. Radhika personally examined my skin barrier under a dermoscope before recommending customized active serums. My texture and acne spots improved dramatically.",
    verified: true,
    tags: ["Barrier Repair", "Doctor-Led", "US-FDA Tech"],
  },
  {
    id: "2",
    name: "Dr. Rohit Shinde",
    category: "laser",
    service: "Triple-Wavelength Painless Laser Hair Reduction",
    divisionTag: "Division 03: Painless Laser",
    rating: 5,
    location: "Baramati MIDC",
    date: "November 2026",
    highlight: "Sub-zero sapphire cooling made the entire session 100% pain-free",
    review: "As a physician myself, I carefully checked their diode laser wavelength parameters and cooling safety. The contact sapphire cooling tip is genuinely ice-cold, making high-density follicular treatments completely comfortable and painless. World-class medical quality in Baramati.",
    verified: true,
    tags: ["Sapphire Cooling", "Zero Burns", "Full Body"],
  },
  {
    id: "3",
    name: "Snehal Kulkarni-Jadhav",
    category: "bridal",
    service: "Bridal HD Airbrush & Semi-Permanent Brows",
    divisionTag: "Division 04: Bridal Artistry",
    rating: 5,
    location: "Pune",
    date: "September 2026",
    highlight: "Makeup stayed pristine for 14 hours through outdoor heat & rituals",
    review: "Booked my wedding makeup and pre-bridal clinical skin prep with M Scissors and the aesthetic team. The airbrush finish looked radiant and seamless in 4K photography, and my brows didn't smudge once. Every single guest complimented my bridal glow.",
    verified: true,
    tags: ["14-Hour Longevity", "HD Airbrush", "Sweat-Resistant"],
  },
  {
    id: "4",
    name: "Amol Jagtap",
    category: "hair",
    service: "Autologous Follicular PRP & Scalp Mesotherapy",
    divisionTag: "Division 02: Advanced Trichology",
    rating: 5,
    location: "Daund / Baramati",
    date: "August 2026",
    highlight: "Significant crown density recovery after 4 targeted sessions",
    review: "I was losing hair rapidly from post-fever telogen effluvium. Dr. Vikram mapped my follicles with high-resolution dermoscopy and tailored growth factor therapy. Within 90 days, shedding dropped to zero and noticeable new hair density filled in.",
    verified: true,
    tags: ["Digital Dermoscopy", "Autologous Growth Factors", "Follicle Revival"],
  },
  {
    id: "5",
    name: "Meera Nimbalkar",
    category: "skin",
    service: "Melasma Depigmentation & Carbon Laser Peel",
    divisionTag: "Division 01: Skin Longevity",
    rating: 5,
    location: "Baramati City",
    date: "October 2026",
    highlight: "Stubborn hormonal pigmentation faded by over 80%",
    review: "I struggled with postpartum melasma across both cheeks for over two years. The bespoke sequential peel protocol and home actives prescribed by Dr. Radhika cleared the dark patches safely without any redness or rebound darkening.",
    verified: true,
    tags: ["Safe on Indian Skin", "Pigment Correction", "Derm-Approved"],
  },
  {
    id: "6",
    name: "Tanvi Bhosale",
    category: "bridal",
    service: "Aesthetic Lip Blush Tattoo & Lymphatic Facial",
    divisionTag: "Division 08: PMU & Dermopigmentation",
    rating: 5,
    location: "Indapur / Baramati",
    date: "November 2026",
    highlight: "Waking up with perfectly tinted, youthful, symmetrical lips every day",
    review: "The PMU suite is completely sterile with hospital-grade hygiene and single-use cartridges. The color matching to my natural undertone was spot on. Healing took just 5 days with their aftercare balm. It saves me 20 minutes every morning.",
    verified: true,
    tags: ["Organic Pigments", "Sterile Cartridges", "5-Day Healing"],
  },
];

export function buildWhatsAppLink(details: {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
  productName?: string;
}): string {
  const base = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=`;
  let text = "";

  if (details.productName) {
    text = `Hello S Fvour Clinic,\n\nI am interested in purchasing:\n- Product: ${details.productName}\n${details.name ? `- Name: ${details.name}\n` : ""}- Please share pricing and delivery details for Baramati/Pune.\n\nThank you!`;
  } else {
    text = `Hello S Fvour Clinic,\n\nI would like to book an appointment at your Baramati MIDC clinic:\n` +
      `- Name: ${details.name || "Client"}\n` +
      (details.phone ? `- Phone: ${details.phone}\n` : "") +
      `- Treatment: ${details.service || "Aesthetic Consultation"}\n` +
      (details.date ? `- Preferred Slot: ${details.date}\n` : "") +
      (details.message ? `- Notes: ${details.message}\n` : "") +
      `\nPlease confirm availability. Thank you!`;
  }

  return base + encodeURIComponent(text);
}

