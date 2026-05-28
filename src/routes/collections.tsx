import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

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
  const collections = Array.from(new Set(products.map((p) => p.collection)));
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Curated Edits</p>
        <h1 className="font-display text-5xl md:text-6xl">Our <span className="font-serif-italic">Collections</span></h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {collections.map((c) => {
          const hero = products.find((p) => p.collection === c)!;
          return (
            <Link key={c} to="/shop" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={hero.image} alt={c} className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Collection</p>
                  <h3 className="font-display text-3xl mt-2">{c}</h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">Discover</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
