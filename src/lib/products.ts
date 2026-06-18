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

export const products: Product[] = [];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
