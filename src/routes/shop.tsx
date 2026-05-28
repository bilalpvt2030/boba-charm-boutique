import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Boba Charms" },
      { name: "description", content: "Browse the full collection of Boba Charms — phone charms and boutique accessories." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-16 fade-in-up">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">All Pieces</p>
        <h1 className="font-display text-5xl md:text-6xl">The <span className="font-serif-italic">Collection</span></h1>
        <p className="mt-6 max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed">
          A complete archive of every piece in the house — refined, intentional, intimate.
        </p>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
