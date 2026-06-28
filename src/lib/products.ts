const BASE = "https://uqradmprupflbivhzshi.supabase.co/storage/v1/object/public/products";

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
  { id: "purple-butterfly-earrings", name: "Purple Butterfly Star Earrings", price: 49, category: "earrings", image: `${BASE}/49.jpg`, inStock: true },
  { id: "blue-butterfly-earrings", name: "Blue Butterfly Star Earrings", price: 49, category: "earrings", image: `${BASE}/49-2.jpg`, inStock: true },
  { id: "olive-butterfly-earrings", name: "Olive Butterfly Star Earrings", price: 49, category: "earrings", image: `${BASE}/49-4.jpg`, inStock: true },
  { id: "crimson-heart-phone-charm", name: "Crimson Heart Phone Charm", price: 49, category: "phone-charms", image: `${BASE}/49-5.jpg`, inStock: true },
  { id: "green-locket-necklace", name: "Pearl Butterfly Locket Necklace", price: 99, category: "necklaces", image: `${BASE}/99.jpg`, inStock: true, featured: true, badge: "Bestseller" },
  { id: "monochrome-dice-charm", name: "Monochrome Dice Bead Phone Charm", price: 109, category: "phone-charms", image: `${BASE}/109.jpg`, inStock: true },
  { id: "rose-heart-phone-charm", name: "Rose Heart Dangle Phone Charm", price: 109, category: "phone-charms", image: `${BASE}/109-2.jpg`, inStock: true },
  { id: "guitar-retro-keychain", name: "Guitar & Retro Phone Keychain", price: 109, category: "keychains", image: `${BASE}/109-3.jpg`, inStock: true },
  { id: "lavender-bow-strap", name: "Lavender Bow Phone Strap", price: 119, category: "phone-charms", image: `${BASE}/119.jpg`, inStock: true },
  { id: "petal-pink-strap", name: "Petal Pink Phone Strap", price: 119, category: "phone-charms", image: `${BASE}/119-2.jpg`, inStock: true, featured: true },
  { id: "noir-bow-star-charm", name: "Noir Bow & Star Phone Charm", price: 129, category: "phone-charms", image: `${BASE}/129.jpg`, inStock: true },
  { id: "sage-bow-star-charm", name: "Sage Bow & Star Phone Charm", price: 129, category: "phone-charms", image: `${BASE}/129-2.jpg`, inStock: true },
  { id: "strawberry-cake-charm", name: "Strawberry Cake Phone Charm", price: 159, category: "phone-charms", image: `${BASE}/159.jpg`, inStock: true, featured: true, badge: "New" },
  { id: "red-heart-trio-necklace", name: "Red Heart Trio Necklace", price: 159, category: "necklaces", image: `${BASE}/159-2.jpg`, inStock: true, badge: "Set of 3" },
  { id: "rouge-bow-pearl-charm", name: "Rouge Bow & Pearl Phone Charm", price: 159, category: "phone-charms", image: `${BASE}/159-3.jpg`, inStock: true },
  { id: "pink-bow-flower-charm", name: "Pink Bow & Flower Phone Charm", price: 169, category: "phone-charms", image: `${BASE}/169.jpg`, inStock: true },
  { id: "teal-fairy-flower-charm", name: "Teal Fairy Flower Phone Charm", price: 169, category: "phone-charms", image: `${BASE}/169-2.jpg`, inStock: true },
  { id: "midnight-fairy-bracelet", name: "Midnight Fairy Charm Bracelet", price: 189, category: "bracelets", image: `${BASE}/189.jpg`, inStock: true, featured: true, badge: "Featured" },
  { id: "garnet-pearl-strap-duo", name: "Garnet & Pearl Wrist Strap Duo", price: 199, category: "phone-charms", image: `${BASE}/199.jpg`, inStock: true, badge: "Duo Set" },
  { id: "violet-butterfly-earrings", name: "Violet Butterfly Star Earrings", price: 199, category: "earrings", image: `${BASE}/199-2.jpg`, inStock: true },
  { id: "blush-fairy-phone-charm", name: "Blush Fairy Phone Charm", price: 199, category: "phone-charms", image: `${BASE}/199-3.jpg`, inStock: true },
  { id: "ivory-dice-rose-bracelet", name: "Ivory Dice & Rose Bracelet", price: 199, category: "bracelets", image: `${BASE}/199-4.jpg`, inStock: true },
  { id: "maliha-personalised-keychain", name: "Maliha Personalised Keychain", price: 209, category: "keychains", image: `${BASE}/209.jpg`, inStock: true, featured: true, badge: "Custom" },
  { id: "blue-flower-bow-charm", name: "Blue Flower & Bow Phone Charm", price: 299, category: "phone-charms", image: `${BASE}/299.jpg`, inStock: true, featured: true, badge: "Premium" },
  { id: "williams-f1-keychain", name: "Williams F1 Racing Keychain", price: 650, category: "keychains", image: `${BASE}/650.jpg`, inStock: true, featured: true, badge: "Luxury" },
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
