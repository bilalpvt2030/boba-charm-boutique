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
    id: "williams-f1-blue",
    name: "Williams F1 Blue Keychain",
    price: 49,
    category: "keychains",
    image: `${SUPABASE_PRODUCTS_BASE}/keychain-williams-f1-blue.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/keychain-williams-f1-blue.jpg`],
    featured: true,
    inStock: true,
    description: "Blue Formula-style keychain charm with heart and star accents."
  },
  {
    id: "green-heart-locket",
    name: "Green Heart Locket Necklace",
    price: 99,
    category: "necklaces",
    image: `${SUPABASE_PRODUCTS_BASE}/necklace-green-heart-locket.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/necklace-green-heart-locket.jpg`],
    featured: true,
    inStock: true,
    description: "Green beaded necklace with butterfly details and a heart locket."
  },
  {
    id: "pink-flower-bow",
    name: "Pink Flower Bow Phone Charm",
    price: 109,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-flower-bow.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-flower-bow.jpg`],
    inStock: true,
    description: "Soft pink phone charm with floral and bow details."
  },
  {
    id: "guitar-phone-charm",
    name: "Guitar Phone Charm",
    price: 109,
    category: "keychains",
    image: `${SUPABASE_PRODUCTS_BASE}/keychain-guitar-phone-charm.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/keychain-guitar-phone-charm.jpg`],
    inStock: true,
    description: "Music-inspired charm featuring guitar, notes, and heart accents."
  },
  {
    id: "green-bow-double",
    name: "Green Bow Double Phone Charm",
    price: 109,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-green-bow-double.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-green-bow-double.jpg`],
    inStock: true,
    description: "Green phone charm with double dangling bow-inspired strands."
  },
  {
    id: "pink-beaded-strap",
    name: "Pink Beaded Strap",
    price: 119,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-beaded-strap.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-beaded-strap.jpg`],
    inStock: true,
    description: "Pink beaded strap with soft pastel bow and pearl styling."
  },
  {
    id: "pink-purple-strap",
    name: "Pink Purple Strap",
    price: 119,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-purple-strap.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-pink-purple-strap.jpg`],
    inStock: true,
    description: "Pink and purple beaded strap with glossy pastel details."
  },
  {
    id: "black-bow-star",
    name: "Black Bow Star Phone Charm",
    price: 129,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-black-bow-star.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-black-bow-star.jpg`],
    inStock: true,
    description: "Dark bow-themed charm with star and pearl accents."
  },
  {
    id: "green-bow-star",
    name: "Green Bow Star Phone Charm",
    price: 129,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-green-bow-star.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-green-bow-star.jpg`],
    inStock: true,
    description: "Green bow-themed charm with star drop and playful beadwork."
  },
  {
    id: "red-cake",
    name: "Red Cake Phone Charm",
    price: 159,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-red-cake.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-red-cake.jpg`],
    featured: true,
    inStock: true,
    description: "Dessert-inspired red phone charm with cake and star accents."
  },
  {
    id: "black-fairy-charm",
    name: "Black Fairy Charm Bracelet",
    price: 159,
    category: "bracelets",
    image: `${SUPABASE_PRODUCTS_BASE}/bracelet-black-fairy-charm.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/bracelet-black-fairy-charm.jpg`],
    inStock: true,
    description: "Black bracelet with fairy charm, heart details, and pearls."
  },
  {
    id: "red-bow-heart",
    name: "Red Bow Heart Phone Charm",
    price: 159,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-red-bow-heart.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-red-bow-heart.jpg`],
    inStock: true,
    description: "Red charm with bow, heart, and romantic drop details."
  },
  {
    id: "red-heart-trio",
    name: "Red Heart Trio Necklace",
    price: 169,
    category: "necklaces",
    image: `${SUPABASE_PRODUCTS_BASE}/necklace-red-heart-trio.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/necklace-red-heart-trio.jpg`],
    featured: true,
    inStock: true,
    description: "Set of red heart pendant necklaces with a bold romantic style."
  },
  {
    id: "galaxy-heart-pair",
    name: "Galaxy Heart Pair Necklace",
    price: 169,
    category: "necklaces",
    image: `${SUPABASE_PRODUCTS_BASE}/necklace-galaxy-heart-pair.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/necklace-galaxy-heart-pair.jpg`],
    inStock: true,
    description: "Pair of galaxy-toned heart necklaces with purple-blue gradients."
  },
  {
    id: "white-rose-charm",
    name: "White Rose Charm Bracelet",
    price: 189,
    category: "bracelets",
    image: `${SUPABASE_PRODUCTS_BASE}/bracelet-white-rose-charm.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/bracelet-white-rose-charm.jpg`],
    inStock: true,
    description: "Light-toned bracelet with rose, crystal, and pearl accents."
  },
  {
    id: "maliha-personalized",
    name: "Maliha Personalized Keychain",
    price: 199,
    category: "keychains",
    image: `${SUPABASE_PRODUCTS_BASE}/keychain-maliha-personalized.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/keychain-maliha-personalized.jpg`],
    featured: true,
    inStock: true,
    description: "Personalized beaded keychain with the name Maliha and charm details."
  },
  {
    id: "red-pearl-bow-bracelet-set",
    name: "Red Pearl Bow Bracelet Set",
    price: 199,
    category: "bracelets",
    image: `${SUPABASE_PRODUCTS_BASE}/bracelets-red-pearl-bow.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/bracelets-red-pearl-bow.jpg`],
    inStock: true,
    description: "Matching bracelet set with red beads, pearls, bows, and floral accents."
  },
  {
    id: "blue-flower",
    name: "Blue Flower Phone Charm",
    price: 199,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-blue-flower.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-blue-flower.jpg`],
    inStock: true,
    description: "Blue floral drop charm with translucent petals and ribbon finish."
  },
  {
    id: "blue-butterfly-star",
    name: "Blue Butterfly Star Earrings",
    price: 199,
    category: "earrings",
    image: `${SUPABASE_PRODUCTS_BASE}/earrings-blue-butterfly-star.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/earrings-blue-butterfly-star.jpg`],
    inStock: true,
    description: "Blue butterfly earrings with star tops and glossy finish."
  },
  {
    id: "purple-butterfly-star",
    name: "Purple Butterfly Star Earrings",
    price: 209,
    category: "earrings",
    image: `${SUPABASE_PRODUCTS_BASE}/earrings-purple-butterfly-star.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/earrings-purple-butterfly-star.jpg`],
    inStock: true,
    description: "Purple butterfly earrings with soft pastel shimmer."
  },
  {
    id: "yellow-butterfly-star",
    name: "Yellow Butterfly Star Earrings",
    price: 299,
    category: "earrings",
    image: `${SUPABASE_PRODUCTS_BASE}/earrings-yellow-butterfly-star.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/earrings-yellow-butterfly-star.jpg`],
    inStock: true,
    description: "Yellow-green butterfly earrings with pearl star styling."
  },
  {
    id: "black-white-strap",
    name: "Black White Strap",
    price: 49,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-black-white-strap.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-black-white-strap.jpg`],
    inStock: true,
    description: "Black and white beaded strap with star and pearl details."
  },
  {
    id: "red-heart-triple",
    name: "Red Heart Triple Charm",
    price: 49,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-red-heart-triple.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-red-heart-triple.jpg`],
    inStock: true,
    description: "Triple-drop red heart charm with decorative bead accents."
  },
  {
    id: "teal-flower-fairy",
    name: "Teal Flower Fairy Charm",
    price: 49,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-teal-flower-fairy.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-teal-flower-fairy.jpg`],
    inStock: true,
    description: "Teal floral fairy charm with delicate beadwork and bow-inspired details."
  },
  {
    id: "red-double-strand",
    name: "Red Double Strand Charm",
    price: 650,
    category: "phone-charms",
    image: `${SUPABASE_PRODUCTS_BASE}/phone-charm-red-double-strand.jpg`,
    images: [`${SUPABASE_PRODUCTS_BASE}/phone-charm-red-double-strand.jpg`],
    featured: true,
    inStock: true,
    description: "Statement red double-strand charm with rich pearl and bow styling."
  }
];


export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
