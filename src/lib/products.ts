const GITHUB_BASE = "https://raw.githubusercontent.com/bilalpvt2030/products-/main";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings" | "charm";
  image: string;
  images?: string[];
  featured?: boolean;
  inStock?: boolean;
  description?: string;
  badge?: string;
  collection?: string;
  originalPrice?: number;
};

export const products: Product[] = [
  {
    id: "aurora-mist",
    name: "Aurora Mist",
    price: 199,
    category: "charm",
    image: `${GITHUB_BASE}/199.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "blossom-grace",
    name: "Blossom Grace",
    price: 49,
    category: "charm",
    image: `${GITHUB_BASE}/49(5).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "blossom-whisper",
    name: "Blossom Whisper",
    price: 159,
    category: "charm",
    image: `${GITHUB_BASE}/159(3).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "celestial-drop",
    name: "Celestial Drop",
    price: 199,
    category: "charm",
    image: `${GITHUB_BASE}/199(2).jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "crystal-mist",
    name: "Crystal Mist",
    price: 99,
    category: "charm",
    image: `${GITHUB_BASE}/99.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "dewdrop-bliss",
    name: "Dewdrop Bliss",
    price: 199,
    category: "charm",
    image: `${GITHUB_BASE}/199(3).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "ethereal-glow",
    name: "Ethereal Glow",
    price: 209,
    category: "charm",
    image: `${GITHUB_BASE}/209.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "floral-dream",
    name: "Floral Dream",
    price: 49,
    category: "charm",
    image: `${GITHUB_BASE}/49(4).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "frosted-pearl",
    name: "Frosted Pearl",
    price: 159,
    category: "charm",
    image: `${GITHUB_BASE}/159(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "grand-pearl",
    name: "Grand Pearl",
    price: 650,
    category: "charm",
    image: `${GITHUB_BASE}/650.jpg`,
    inStock: true,
    featured: true,
    badge: "Premium",
    collection: "Spring Edit",
  },
  {
    id: "ivory-whisper",
    name: "Ivory Whisper",
    price: 109,
    category: "charm",
    image: `${GITHUB_BASE}/109.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "luna-pearl",
    name: "Luna Pearl",
    price: 109,
    category: "charm",
    image: `${GITHUB_BASE}/109(3).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "moonstone-glow",
    name: "Moonstone Glow",
    price: 119,
    category: "charm",
    image: `${GITHUB_BASE}/119(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "morning-dew",
    name: "Morning Dew",
    price: 159,
    category: "charm",
    image: `${GITHUB_BASE}/159.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "opal-dreams",
    name: "Opal Dreams",
    price: 119,
    category: "charm",
    image: `${GITHUB_BASE}/119.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "orchid-grace",
    name: "Orchid Grace",
    price: 169,
    category: "charm",
    image: `${GITHUB_BASE}/169.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "pearl-blossom",
    name: "Pearl Blossom",
    price: 49,
    category: "charm",
    image: `${GITHUB_BASE}/49.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "petal-bloom",
    name: "Petal Bloom",
    price: 49,
    category: "charm",
    image: `${GITHUB_BASE}/49(3).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "petal-cascade",
    name: "Petal Cascade",
    price: 169,
    category: "charm",
    image: `${GITHUB_BASE}/169(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    price: 49,
    category: "charm",
    image: `${GITHUB_BASE}/49(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "royal-bloom",
    name: "Royal Bloom",
    price: 299,
    category: "charm",
    image: `${GITHUB_BASE}/299.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "sakura-elegance",
    name: "Sakura Elegance",
    price: 109,
    category: "charm",
    image: `${GITHUB_BASE}/109(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "silk-petal",
    name: "Silk Petal",
    price: 129,
    category: "charm",
    image: `${GITHUB_BASE}/129(2).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "starlit-petal",
    name: "Starlit Petal",
    price: 199,
    category: "charm",
    image: `${GITHUB_BASE}/199(4).jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
  {
    id: "velvet-pearl",
    name: "Velvet Pearl",
    price: 189,
    category: "charm",
    image: `${GITHUB_BASE}/189.jpg`,
    inStock: true,
    featured: true,
    collection: "Spring Edit",
  },
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    price: 129,
    category: "charm",
    image: `${GITHUB_BASE}/129.jpg`,
    inStock: true,
    collection: "Spring Edit",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatINR(price: number): string {
  return `\u20b9${price.toLocaleString('en-IN')}`;
}
