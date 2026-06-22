const SUPABASE_BASE =
  "https://uqradmprupflbivhzshi.supabase.co/storage/v1/object/public/products";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings" | "charm";
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
  // ₹49 — Budget Charms (5 products)
  {
    id: "pearl-blossom",
    name: "Pearl Blossom",
    price: 49,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelet-white-rose-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    price: 49,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-purple-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "petal-bloom",
    name: "Petal Bloom",
    price: 49,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-yellow-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "floral-dream",
    name: "Floral Dream",
    price: 49,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-mint-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "blossom-grace",
    name: "Blossom Grace",
    price: 49,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-blue-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹99
  {
    id: "crystal-mist",
    name: "Crystal Mist",
    price: 99,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelet-black-fairy-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹109
  {
    id: "ivory-whisper",
    name: "Ivory Whisper",
    price: 109,
    category: "charm",
    image: `${SUPABASE_BASE}/phone-charm-black-bow-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "sakura-elegance",
    name: "Sakura Elegance",
    price: 109,
    category: "charm",
    image: `${SUPABASE_BASE}/phone-charm-black-white-strap.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "luna-pearl",
    name: "Luna Pearl",
    price: 109,
    category: "charm",
    image: `${SUPABASE_BASE}/phone-charm-green-bow-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹119
  {
    id: "moonstone-glow",
    name: "Moonstone Glow",
    price: 119,
    category: "charm",
    image: `${SUPABASE_BASE}/phone-charm-green-bow-double.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "opal-dreams",
    name: "Opal Dreams",
    price: 119,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelets-red-pearl-bow.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹129
  {
    id: "silk-petal",
    name: "Silk Petal",
    price: 129,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-red-heart-trio.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    price: 129,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-green-heart-locket.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹159
  {
    id: "blossom-whisper",
    name: "Blossom Whisper",
    price: 159,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-galaxy-heart-pair.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "frosted-pearl",
    name: "Frosted Pearl",
    price: 159,
    category: "charm",
    image: `${SUPABASE_BASE}/keychain-maliha-personalized.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "morning-dew",
    name: "Morning Dew",
    price: 159,
    category: "charm",
    image: `${SUPABASE_BASE}/keychain-guitar-phone-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹169
  {
    id: "orchid-grace",
    name: "Orchid Grace",
    price: 169,
    category: "charm",
    image: `${SUPABASE_BASE}/keychain-williams-f1-blue.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "petal-cascade",
    name: "Petal Cascade",
    price: 169,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelet-white-rose-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹189
  {
    id: "velvet-pearl",
    name: "Velvet Pearl",
    price: 189,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelet-black-fairy-charm.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹199
  {
    id: "aurora-mist",
    name: "Aurora Mist",
    price: 199,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-purple-butterfly-star.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "celestial-drop",
    name: "Celestial Drop",
    price: 199,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-galaxy-heart-pair.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "dewdrop-bliss",
    name: "Dewdrop Bliss",
    price: 199,
    category: "charm",
    image: `${SUPABASE_BASE}/phone-charm-blue-flower.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "starlit-petal",
    name: "Starlit Petal",
    price: 199,
    category: "charm",
    image: `${SUPABASE_BASE}/earrings-blue-butterfly-star.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  // ₹209
  {
    id: "ethereal-glow",
    name: "Ethereal Glow",
    price: 209,
    category: "charm",
    image: `${SUPABASE_BASE}/bracelets-red-pearl-bow.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  // ₹299
  {
    id: "royal-bloom",
    name: "Royal Bloom",
    price: 299,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-red-heart-trio.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  // ₹650
  {
    id: "grand-pearl",
    name: "Grand Pearl",
    price: 650,
    category: "charm",
    image: `${SUPABASE_BASE}/necklace-green-heart-locket.jpg`,
    inStock: true,
    featured: true,
    badge: "Premium",
    collection: "Spring Edit",
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
