import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { ProductGrid } from "@/components/product/ProductGrid";

type Category = "all" | "phone-charms" | "keychains" | "bracelets" | "necklaces" | "earrings";

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "phone-charms", label: "Phone Charms" },
  { value: "earrings", label: "Earrings" },
  { value: "bracelets", label: "Bracelets" },
  { value: "necklaces", label: "Necklaces" },
  { value: "keychains", label: "Keychains" },
];

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Boba Charms" },
      { name: "description", content: "Explore curated collections from Boba Charms." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered: Product[] =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Curated Edits</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl">
          Our <span className="font-serif-italic">Collections</span>
        </h1>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`min-h-[44px] px-5 py-2 text-[11px] uppercase tracking-[0.2em] rounded-full border transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-foreground border-border hover:border-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <ProductGrid products={filtered} />
    </section>
  );
}
