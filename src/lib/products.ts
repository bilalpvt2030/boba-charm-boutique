import type { CSSProperties } from 'react';

export interface Product {
  id: string;
  name: string;
  category: 'earrings' | 'keychains' | 'bracelets' | 'necklaces';
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: 'new' | 'sale' | 'trending';
  colors?: string[];
  material: string;
  dimensions?: string;
  care?: string;
}

// Product data - 25 items total (prices in Indian Rupees ₹ @ 1:83 conversion)
export const products: Product[] = [
  // EARRINGS (5 variants - butterfly collection)
  {
    id: 'ear-001',
    name: 'Lavender Dream Butterfly Earrings',
    category: 'earrings',
    price: 4067,
    image: '/products/earrings/lavender-butterfly.jpg',
    description: 'Delicate lavender butterfly charm earrings with opal-inspired resin details. Perfect for everyday elegance and whimsical style.',
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    badge: 'trending',
    material: 'Surgical steel with resin',
    colors: ['Lavender'],
    care: 'Avoid water and perfume',
  },
  {
    id: 'ear-002',
    name: 'Golden Butterfly Earrings',
    category: 'earrings',
    price: 4067,
    image: '/products/earrings/golden-butterfly.jpg',
    description: 'Classic gold-toned butterfly earrings with pearl accents. Timeless sophistication for any occasion.',
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    material: 'Gold-plated brass with pearl',
    colors: ['Gold'],
    care: 'Wipe clean with soft cloth',
  },
  {
    id: 'ear-003',
    name: 'Blue Butterfly Drop Earrings',
    category: 'earrings',
    price: 4067,
    originalPrice: 8217,
    image: '/products/earrings/blue-butterfly.jpg',
    description: 'Charming blue butterfly earrings with star accents. Playful yet elegant design.',
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    badge: 'sale',
    material: 'Surgical steel with resin',
    colors: ['Blue'],
    care: 'Keep dry',
  },
  {
    id: 'ear-004',
    name: 'Rainbow Heart Pendant Earrings',
    category: 'earrings',
    price: 4067,
    image: '/products/earrings/rainbow-heart.jpg',
    description: 'Multicolor gradient heart earrings on delicate black cord. Modern romantic style.',
    rating: 4.7,
    reviewCount: 124,
    inStock: true,
    material: 'Acrylic with black cord',
    colors: ['Rainbow Gradient'],
    care: 'Avoid direct sunlight',
  },
  {
    id: 'ear-005',
    name: 'Cherry Red Heart Earrings',
    category: 'earrings',
    price: 4067,
    image: '/products/earrings/cherry-red-hearts.jpg',
    description: 'Bold cherry red heart earrings on black string. Statement piece for confident style.',
    rating: 4.6,
    reviewCount: 92,
    inStock: true,
    material: 'Acrylic hearts with black string',
    colors: ['Cherry Red'],
    care: 'Handle with care',
  },

  // KEYCHAINS (12 variants)
  {
    id: 'key-001',
    name: 'Mystical Bow Charm Keychain',
    category: 'keychains',
    price: 9047,
    image: '/products/keychains/mystical-bow.jpg',
    description: 'Elegant bow with dangling mystical charm elements. Perfect accessory for bags and keys.',
    rating: 4.9,
    reviewCount: 287,
    inStock: true,
    badge: 'trending',
    material: 'Silver-toned metal with acrylic',
    colors: ['Silver'],
    care: 'Wipe with dry cloth',
  },
  {
    id: 'key-002',
    name: 'Racing Blue Keychain',
    category: 'keychains',
    price: 8217,
    image: '/products/keychains/racing-blue.jpg',
    description: 'Sporty racing car charm with blue & white detailing. For car enthusiasts and speed lovers.',
    rating: 4.5,
    reviewCount: 67,
    inStock: true,
    material: 'Metal with enamel coating',
    colors: ['Blue & White'],
    care: 'Keep dry',
  },
  {
    id: 'key-003',
    name: 'Crystal Flower Cascade Keychain',
    category: 'keychains',
    price: 9047,
    image: '/products/keychains/crystal-flowers.jpg',
    description: 'Multi-strand beaded keychain with crystal flowers and pearls. Elegant and delicate.',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    material: 'Beads, pearls, and metal chains',
    colors: ['Multi-pastel'],
    care: 'Avoid harsh pulling',
  },
  {
    id: 'key-004',
    name: 'Black Star Charm Keychain',
    category: 'keychains',
    price: 9877,
    image: '/products/keychains/black-star.jpg',
    description: 'Minimalist black beads with star and charm accents. Subtle elegance for everyday carry.',
    rating: 4.7,
    reviewCount: 113,
    inStock: true,
    material: 'Black beads with silver charms',
    colors: ['Black & Silver'],
    care: 'Keep away from moisture',
  },
  {
    id: 'key-005',
    name: 'Pastel Dream Lanyard Keychain',
    category: 'keychains',
    price: 9047,
    originalPrice: 13197,
    image: '/products/keychains/pastel-lanyard.jpg',
    description: 'Soft pastel beads with decorative charms on purple cord. Dreamy aesthetic.',
    rating: 4.8,
    reviewCount: 134,
    inStock: true,
    badge: 'sale',
    material: 'Beads on purple cord',
    colors: ['Pastel Mix'],
    care: 'Wipe gently',
  },
  {
    id: 'key-006',
    name: 'Gaming Lover Keychain',
    category: 'keychains',
    price: 9877,
    image: '/products/keychains/gaming-keychain.jpg',
    description: 'Fun gaming-themed charms with dice and hearts. Perfect for gamers and enthusiasts.',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    material: 'Metal charms with beads',
    colors: ['Multi'],
    care: 'Dust occasionally',
  },
  {
    id: 'key-007',
    name: 'Green Bow Vine Keychain',
    category: 'keychains',
    price: 9047,
    image: '/products/keychains/green-bow.jpg',
    description: 'Nature-inspired green bow with vine and charm details. Eco-aesthetic design.',
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    badge: 'new',
    material: 'Metal with enamel and beads',
    colors: ['Green'],
    care: 'Avoid extreme heat',
  },
  {
    id: 'key-008',
    name: 'Minimalist Pearl Keychain',
    category: 'keychains',
    price: 9877,
    image: '/products/keychains/pearl-keychain.jpg',
    description: 'Simple pearl and metal bead keychain. Sophisticated minimalist design.',
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    material: 'Pearls with silver-tone metal',
    colors: ['Pearl White'],
    care: 'Keep dry',
  },
  {
    id: 'key-009',
    name: 'Mystical Bow Star Keychain',
    category: 'keychains',
    price: 10707,
    image: '/products/keychains/bow-stars.jpg',
    description: 'Elegant bow with star and pearl charm ensemble. Whimsical and charming.',
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    material: 'Metal with pearls and beads',
    colors: ['Silver & Pearl'],
    care: 'Handle gently',
  },
  {
    id: 'key-010',
    name: 'Black Bow Star Keychain',
    category: 'keychains',
    price: 10707,
    image: '/products/keychains/black-bow-star.jpg',
    description: 'Sophisticated black bow with star and pearl accents. Elegant everyday piece.',
    rating: 4.7,
    reviewCount: 128,
    inStock: true,
    material: 'Black metal with silver charms',
    colors: ['Black & Silver'],
    care: 'Avoid moisture',
  },
  {
    id: 'key-011',
    name: 'Pastel Charm Cascade Keychain',
    category: 'keychains',
    price: 10707,
    image: '/products/keychains/pastel-cascade.jpg',
    description: 'Pastel beads with multiple charm strands. Playful and colorful design.',
    rating: 4.6,
    reviewCount: 99,
    inStock: true,
    material: 'Pastel beads with metal charms',
    colors: ['Pastel Mix'],
    care: 'Keep clean',
  },
  {
    id: 'key-012',
    name: 'Turquoise Bow Charm Keychain',
    category: 'keychains',
    price: 10707,
    image: '/products/keychains/turquoise-bow.jpg',
    description: 'Vibrant turquoise bow with pearl and star charms. Fresh and feminine style.',
    rating: 4.7,
    reviewCount: 121,
    inStock: true,
    material: 'Enamel with pearls',
    colors: ['Turquoise'],
    care: 'Wipe clean',
  },

  // BRACELETS (4 variants)
  {
    id: 'brc-001',
    name: 'Charm Beaded Chain Bracelet',
    category: 'bracelets',
    price: 14037,
    image: '/products/bracelets/charm-chain.jpg',
    description: 'Classic chain bracelet with assorted charms and pearl beads. Versatile everyday luxury piece.',
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    badge: 'trending',
    material: 'Silver-tone chain with beads',
    colors: ['Silver & Pearl'],
    dimensions: 'Adjustable 7-8 inches',
    care: 'Avoid chlorine',
  },
  {
    id: 'brc-002',
    name: 'Pearl & Heart Luxury Bracelet',
    category: 'bracelets',
    price: 13197,
    originalPrice: 24807,
    image: '/products/bracelets/pearl-heart.jpg',
    description: 'Premium pearl and heart charm bracelet. Elegant everyday luxury for special occasions.',
    rating: 5.0,
    reviewCount: 245,
    inStock: true,
    badge: 'sale',
    material: 'Freshwater pearls with silver',
    colors: ['White Pearl'],
    dimensions: 'Adjustable 7-9 inches',
    care: 'Store in soft pouch',
  },
  {
    id: 'brc-003',
    name: 'Black Bead Statement Bracelet',
    category: 'bracelets',
    price: 14037,
    image: '/products/bracelets/black-bead.jpg',
    description: 'Bold black beads with mixed metal charms. Modern statement piece for confident style.',
    rating: 4.7,
    reviewCount: 108,
    inStock: true,
    material: 'Black obsidian-style beads',
    colors: ['Black & Silver'],
    dimensions: 'Fits 6-8 inches',
    care: 'Clean with soft brush',
  },
  {
    id: 'brc-004',
    name: 'Pastel Bow Beads Bracelet',
    category: 'bracelets',
    price: 15697,
    image: '/products/bracelets/pastel-bow.jpg',
    description: 'Delicate pastel beads with pretty bow charm. Sweet and feminine everyday jewelry.',
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    badge: 'new',
    material: 'Pastel acrylic beads with bow',
    colors: ['Pastel Mix'],
    dimensions: 'Adjustable 6-8 inches',
    care: 'Avoid prolonged moisture',
  },

  // NECKLACES (4 variants - NEW CATEGORY)
  {
    id: 'nck-001',
    name: 'Bow & Heart Bead Necklace',
    category: 'necklaces',
    price: 16527,
    image: '/products/necklaces/bow-heart.jpg',
    description: 'Elegant bow with cascading heart and bead charm details. Romantic statement necklace.',
    rating: 4.8,
    reviewCount: 134,
    inStock: true,
    badge: 'trending',
    material: 'Metal bow with acrylic beads',
    colors: ['Red & White'],
    dimensions: '16-18 inches adjustable',
    care: 'Avoid water',
  },
  {
    id: 'nck-002',
    name: 'Pearl & Flower Necklace',
    category: 'necklaces',
    price: 17357,
    image: '/products/necklaces/pearl-flowers.jpg',
    description: 'Double strand with pearls, flowers, and charm elements. Luxurious layered necklace.',
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
    material: 'Pearls, metal, and acrylic',
    colors: ['Pearl & Rose'],
    dimensions: '18-20 inches adjustable',
    care: 'Store separately',
  },
  {
    id: 'nck-003',
    name: 'Green Bow Cascade Necklace',
    category: 'necklaces',
    price: 16527,
    originalPrice: 24807,
    image: '/products/necklaces/green-bow.jpg',
    description: 'Green bow with pearl and star charm strands. Nature-inspired elegant piece.',
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    badge: 'sale',
    material: 'Enamel with pearls and beads',
    colors: ['Green & Pearl'],
    dimensions: '17-19 inches adjustable',
    care: 'Keep dry',
  },
  {
    id: 'nck-004',
    name: 'Heart Charm Pendant Necklace',
    category: 'necklaces',
    price: 16527,
    image: '/products/necklaces/heart-pendant.jpg',
    description: 'Red heart charm with pearl and bead accents on cord. Romantic everyday jewelry.',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    badge: 'new',
    material: 'Acrylic heart with cord',
    colors: ['Red & Pearl'],
    dimensions: '16-18 inches adjustable',
    care: 'Avoid excessive moisture',
  },
];

// Helper functions
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.badge === 'trending' || product.badge === 'new').slice(0, 8);
}

export function getSaleProducts(): Product[] {
  return products.filter((product) => product.originalPrice);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.material.toLowerCase().includes(lowerQuery)
  );
}

// Product statistics
export const PRODUCT_STATS = {
  total: products.length,
  byCategory: {
    earrings: products.filter((p) => p.category === 'earrings').length,
    keychains: products.filter((p) => p.category === 'keychains').length,
    bracelets: products.filter((p) => p.category === 'bracelets').length,
    necklaces: products.filter((p) => p.category === 'necklaces').length,
  },
  averageRating: (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1),
  onSale: products.filter((p) => p.originalPrice).length,
};
