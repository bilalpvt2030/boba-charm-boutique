import img119 from "@/assets/products/119.jpg";
import img49 from "@/assets/products/49.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  collection: string;
  description: string;
};

const luxuryNames = [
  "Velvet Orbit Charm",
  "Pearl Drift Charm",
  "Lunar Bloom Charm",
  "Emerald Grace Charm",
  "Crimson Heart Charm",
  "Aurora Petal Charm",
  "Satin Whisper Charm",
  "Celestine Drop Charm",
  "Rosé Mirage Charm",
  "Opal Lullaby Charm",
];

// Each entry: filename-derived price, image, optional name/collection override.
const raw: { file: string; image: string; name: string; collection: string; description: string }[] = [
  {
    file: "119",
    image: img119,
    name: "Crimson Heart Charm",
    collection: "Hearts",
    description:
      "A whisper of devotion — a faceted crimson heart set on a slim cord. Worn close, every day.",
  },
  {
    file: "49",
    image: img49,
    name: "Sapphire Papillon Drops",
    collection: "Butterflies",
    description:
      "Iridescent sapphire wings paired with mother-of-pearl stars. Light, lyrical, weightless.",
  },
];

// Create variants so the grid feels full while we wait for the user to add more uploads.
function expand(): Product[] {
  const out: Product[] = [];
  raw.forEach((r, i) => {
    out.push({
      id: `${r.file}-${i}-a`,
      name: r.name,
      price: parseInt(r.file, 10),
      image: r.image,
      size: "OS",
      collection: r.collection,
      description: r.description,
    });
  });
  // pad with curated luxury names reusing the two product photos so the grid feels boutique
  const extras = [
    { name: "Velvet Orbit Charm", price: 299, collection: "Hearts", img: img119 },
    { name: "Pearl Drift Charm", price: 349, collection: "Butterflies", img: img49 },
    { name: "Lunar Bloom Charm", price: 399, collection: "Butterflies", img: img49 },
    { name: "Rosé Mirage Charm", price: 249, collection: "Hearts", img: img119 },
    { name: "Aurora Petal Charm", price: 449, collection: "Butterflies", img: img49 },
    { name: "Satin Whisper Charm", price: 199, collection: "Hearts", img: img119 },
  ];
  extras.forEach((e, i) =>
    out.push({
      id: `extra-${i}`,
      name: e.name,
      price: e.price,
      image: e.img,
      size: "OS",
      collection: e.collection,
      description:
        "Hand-finished with quiet precision. A piece for the particular — refined, intentional, intimate.",
    }),
  );
  return out;
}

export const products: Product[] = expand();
export const luxuryNamePool = luxuryNames;

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
