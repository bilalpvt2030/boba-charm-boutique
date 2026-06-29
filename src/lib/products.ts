const BASE = "https://uqradmprupflbivhzshi.supabase.co/storage/v1/object/public/product-images";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings";
  image: string;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "purple-butterfly-star-earrings",
    name: "Purple Butterfly Star Earrings",
    price: 49,
    category: "earrings",
    image: `${BASE}/49.jpg`,
    inStock: true,
  },
  {
    id: "blue-butterfly-star-earrings",
    name: "Blue Butterfly Star Earrings",
    price: 49,
    category: "earrings",
    image: `${BASE}/49-2.jpg`,
    inStock: true,
  },
  {
    id: "olive-butterfly-star-earrings",
    name: "Olive Butterfly Star Earrings",
    price: 49,
    category: "earrings",
    image: `${BASE}/49-4.jpg`,
    inStock: true,
  },
  {
    id: "frosted-blue-flower-phone-charm",
    name: "Frosted Blue Flower Phone Charm",
    price: 49,
    category: "phone-charms",
    image: `${BASE}/49-5.jpg`,
    inStock: true,
  },
  {
    id: "ruby-bow-pearl-phone-charm",
    name: "Ruby Bow Pearl Phone Charm",
    price: 99,
    category: "phone-charms",
    image: `${BASE}/99.jpg`,
    inStock: true,
    featured: true,
    badge: "Bestseller",
  },
  {
    id: "crimson-pearl-wrist-strap-duo",
    name: "Crimson Pearl Wrist Strap Duo",
    price: 109,
    category: "phone-charms",
    image: `${BASE}/109.jpg`,
    inStock: true,
    badge: "Duo Set",
  },
  {
    id: "maliha-custom-keychain",
    name: "Maliha Custom Keychain",
    price: 109,
    category: "keychains",
    image: `${BASE}/109-2.jpg`,
    inStock: true,
    featured: true,
    badge: "Custom",
  },
  {
    id: "ivory-dice-rose-bracelet",
    name: "Ivory Dice Rose Bracelet",
    price: 109,
    category: "bracelets",
    image: `${BASE}/109-3.jpg`,
    inStock: true,
  },
  {
    id: "aurora-heart-necklace-pair",
    name: "Aurora Heart Necklace Pair",
    price: 119,
    category: "necklaces",
    image: `${BASE}/119.jpg`,
    inStock: true,
    badge: "Pair",
  },
  {
    id: "crimson-heart-necklace-trio",
    name: "Crimson Heart Necklace Trio",
    price: 119,
    category: "necklaces",
    image: `${BASE}/119-2.jpg`,
    inStock: true,
    badge: "Set of 3",
  },
  {
    id: "ruby-bow-dangle-phone-charm",
    name: "Ruby Bow Dangle Phone Charm",
    price: 129,
    category: "phone-charms",
    image: `${BASE}/129.jpg`,
    inStock: true,
  },
  {
    id: "midnight-fairy-charm-bracelet",
    name: "Midnight Fairy Charm Bracelet",
    price: 129,
    category: "bracelets",
    image: `${BASE}/129-2.jpg`,
    inStock: true,
    featured: true,
    badge: "Featured",
  },
  {
    id: "strawberry-cake-phone-charm",
    name: "Strawberry Cake Phone Charm",
    price: 159,
    category: "phone-charms",
    image: `${BASE}/159.jpg`,
    inStock: true,
    featured: true,
    badge: "New",
  },
  {
    id: "matcha-bow-star-phone-charm",
    name: "Matcha Bow Star Phone Charm",
    price: 159,
    category: "phone-charms",
    image: `${BASE}/159-2.jpg`,
    inStock: true,
  },
  {
    id: "noir-bow-star-phone-charm",
    name: "Noir Bow Star Phone Charm",
    price: 159,
    category: "phone-charms",
    image: `${BASE}/159-3.jpg`,
    inStock: true,
  },
  {
    id: "blush-bow-fairy-strap",
    name: "Blush Bow Fairy Strap",
    price: 169,
    category: "phone-charms",
    image: `${BASE}/169.jpg`,
    inStock: true,
  },
  {
    id: "lilac-bow-fairy-strap",
    name: "Lilac Bow Fairy Strap",
    price: 169,
    category: "phone-charms",
    image: `${BASE}/169-2.jpg`,
    inStock: true,
  },
  {
    id: "crystal-bow-fairy-phone-charm",
    name: "Crystal Bow Fairy Phone Charm",
    price: 189,
    category: "phone-charms",
    image: `${BASE}/189.jpg`,
    inStock: true,
  },
  {
    id: "garnet-pearl-wrist-strap-duo",
    name: "Garnet Pearl Wrist Strap Duo",
    price: 199,
    category: "phone-charms",
    image: `${BASE}/199.jpg`,
    inStock: true,
    badge: "Duo Set",
  },
  {
    id: "violet-butterfly-star-earrings",
    name: "Violet Butterfly Star Earrings",
    price: 199,
    category: "earrings",
    image: `${BASE}/199-2.jpg`,
    inStock: true,
  },
  {
    id: "blush-fairy-phone-charm",
    name: "Blush Fairy Phone Charm",
    price: 199,
    category: "phone-charms",
    image: `${BASE}/199-3.jpg`,
    inStock: true,
  },
  {
    id: "white-dice-rose-bracelet",
    name: "White Dice Rose Bracelet",
    price: 199,
    category: "bracelets",
    image: `${BASE}/199-4.jpg`,
    inStock: true,
  },
  {
    id: "rose-heart-charm-strap",
    name: "Rose Heart Charm Strap",
    price: 209,
    category: "phone-charms",
    image: `${BASE}/209.jpg`,
    inStock: true,
  },
  {
    id: "sage-bow-locket-necklace",
    name: "Sage Bow Locket Necklace",
    price: 299,
    category: "necklaces",
    image: `${BASE}/299.jpg`,
    inStock: true,
    featured: true,
    badge: "Premium",
  },
  {
    id: "williams-f1-racing-keychain",
    name: "Williams F1 Racing Keychain",
    price: 650,
    category: "keychains",
    image: `${BASE}/650.jpg`,
    inStock: true,
    featured: true,
    badge: "Luxury",
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
