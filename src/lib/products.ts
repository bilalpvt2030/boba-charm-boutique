import heroImage from "@/assets/products/119.jpg";
import charm49 from "@/assets/products/49.jpg";

const SUPABASE_PRODUCTS_BASE =
  "https://uqradmprupflbivhzshi.supabase.co/storage/v1/object/public/products";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings";
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
    id: "119",
    name: "Crimson Heart",
    price: 119,
    category: "phone-charms",
    image: heroImage,
    collection: "Spring Edit",
    featured: true,
    inStock: true,
    description: "A delicate charm crafted with intention. The perfect companion for those who appreciate quiet elegance.",
  },
  {
    id: "49",
    name: "Rose Whisper",
    price: 49,
    category: "phone-charms",
    image: charm49,
    collection: "Spring Edit",
    featured: true,
    inStock: true,
    description: "Soft blush tones meet refined craftsmanship. A timeless piece for the discerning collector.",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
