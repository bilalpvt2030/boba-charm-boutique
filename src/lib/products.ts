const SUPABASE_BASE = "https://uqradmprupflbivhzshi.supabase.co/storage/v1/object/public/products";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings";
  image: string;
  images?: string[];
  featured?: boolean;
  inStock: boolean;
  description?: string;
  badge?: string;
  collection?: string;
  originalPrice?: number;
};

export const products: Product[] = [
  // ₹49
  {
    id: "pearl-blossom",
    name: "Pearl Blossom Bracelet",
    price: 49,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelet-white-rose-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Delicate white rose charm bracelet with pearl accents.",
  },
  {
    id: "rose-quartz",
    name: "Butterfly Star Earrings",
    price: 49,
    category: "earrings",
    image: `${SUPABASE_BASE}/earrings-purple-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Purple butterfly and star drop earrings.",
  },
  {
    id: "petal-bloom",
    name: "Petal Bloom Charm",
    price: 49,
    category: "phone-charms",
    image: "https://raw.githubusercontent.com/bilalpvt2030/products-/main/49(3).jpg",
    inStock: true,
    collection: "Spring Edit",
    description: "Soft floral phone charm in pastel tones.",
  },
  {
    id: "floral-dream",
    name: "Floral Dream Charm",
    price: 49,
    category: "phone-charms",
    image: "https://raw.githubusercontent.com/bilalpvt2030/products-/main/49(4).jpg",
    inStock: true,
    collection: "Spring Edit",
    description: "Dreamy floral phone charm, lightweight and dainty.",
  },
  {
    id: "blossom-grace",
    name: "Blue Flower Phone Charm",
    price: 49,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-blue-flower.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Dainty blue flower phone charm strap.",
  },
  // ₹99
  {
    id: "crystal-mist",
    name: "Black Fairy Bracelet",
    price: 99,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelet-black-fairy-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Dark fairy charm bracelet with intricate beading.",
  },
  // ₹109
  {
    id: "ivory-whisper",
    name: "Black Bow Star Phone Charm",
    price: 109,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-black-bow-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Elegant black bow and star phone charm strap.",
  },
  {
    id: "sakura-elegance",
    name: "Black & White Strap Charm",
    price: 109,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-black-white-strap.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Minimalist black and white phone charm strap.",
  },
  {
    id: "luna-pearl",
    name: "Luna Pearl Phone Charm",
    price: 109,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-green-bow-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Green bow and star phone charm with pearl finish.",
  },
  // ₹119
  {
    id: "moonstone-glow",
    name: "Green Double Bow Charm",
    price: 119,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-green-bow-double.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Double green bow phone charm, soft and whimsical.",
  },
  {
    id: "opal-dreams",
    name: "Red Pearl Bow Bracelet",
    price: 119,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelets-red-pearl-bow.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Red pearl and bow charm bracelet, romantic style.",
  },
  // ₹129
  {
    id: "silk-petal",
    name: "Red Heart Trio Necklace",
    price: 129,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-red-heart-trio.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Triple heart pendant necklace in red enamel.",
  },
  {
    id: "velvet-rose",
    name: "Green Heart Locket Necklace",
    price: 129,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-green-heart-locket.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Vintage-style green heart locket necklace.",
  },
  // ₹159
  {
    id: "blossom-whisper",
    name: "Galaxy Heart Necklace",
    price: 159,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-galaxy-heart-pair.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Pair of galaxy-finish heart pendants on a delicate chain.",
  },
  {
    id: "frosted-pearl",
    name: "Maliha Personalised Keychain",
    price: 159,
    category: "keychains",
    image: `${SUPABASE_BASE}/keychain-maliha-personalized.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Custom name keychain — sweet personalised gift.",
  },
  {
    id: "morning-dew",
    name: "Guitar Phone Charm Keychain",
    price: 159,
    category: "keychains",
    image: `${SUPABASE_BASE}/keychain-guitar-phone-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Mini guitar charm keychain for music lovers.",
  },
  // ₹169
  {
    id: "orchid-grace",
    name: "Williams F1 Keychain",
    price: 169,
    category: "keychains",
    image: `${SUPABASE_BASE}/keychain-williams-f1-blue.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Williams Racing F1 fan keychain in blue.",
  },
  {
    id: "petal-cascade",
    name: "Rose Charm Bracelet Duo",
    price: 169,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelet-white-rose-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Two stacking rose charm bracelets, gift set.",
    badge: "Set",
  },
  // ₹189
  {
    id: "velvet-pearl",
    name: "Black Fairy Charm Bracelet Set",
    price: 189,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelet-black-fairy-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Dark fairy bracelet in a giftable set of two.",
    badge: "Set",
  },
  // ₹199
  {
    id: "aurora-mist",
    name: "Aurora Butterfly Earrings",
    price: 199,
    category: "earrings",
    image: `${SUPABASE_BASE}/earrings-blue-butterfly-star.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
    description: "Blue aurora butterfly and star drop earrings.",
  },
  {
    id: "celestial-drop",
    name: "Celestial Galaxy Necklace",
    price: 199,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-galaxy-heart-pair.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
    description: "Celestial galaxy-finish heart necklace, statement piece.",
    badge: "Featured",
  },
  {
    id: "dewdrop-bliss",
    name: "Dewdrop Blue Flower Charm",
    price: 199,
    category: "phone-charms",
    image: `${SUPABASE_BASE}/phone-charm-blue-flower.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Dewy blue flower phone charm, fresh and feminine.",
    badge: "New",
  },
  {
    id: "starlit-petal",
    name: "Starlit Butterfly Earrings",
    price: 199,
    category: "earrings",
    image: `${SUPABASE_BASE}/earrings-blue-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
    description: "Blue butterfly star earrings with a starlit sparkle.",
  },
  // ₹209
  {
    id: "ethereal-glow",
    name: "Ethereal Bow Bracelet",
    price: 209,
    category: "bracelets",
    image: `${SUPABASE_BASE}/bracelets-red-pearl-bow.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
    description: "Statement red pearl and bow bracelet with ethereal charm.",
    badge: "Featured",
  },
  // ₹299
  {
    id: "royal-bloom",
    name: "Royal Heart Necklace",
    price: 299,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-red-heart-trio.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
    description: "Bold triple-heart necklace — a royal statement piece.",
    badge: "Best Seller",
  },
  // ₹650
  {
    id: "grand-pearl",
    name: "Grand Pearl Locket Necklace",
    price: 650,
    category: "necklaces",
    image: `${SUPABASE_BASE}/necklace-green-heart-locket.jpg`,
    inStock: true,
    featured: true,
    badge: "Premium",
    collection: "Spring Edit",
    description: "Our most exquisite piece — a vintage green heart locket in premium finish.",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
}
