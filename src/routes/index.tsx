import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/lib/products";
import heroImage from "@/assets/products/119.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boba Charms — Quiet Jewellery for a Particular Taste" },
      { name: "description", content: "Aesthetic phone charms and boutique accessories — curated, intentional, intimate." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 8);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl px-6 py-20 lg:px-12 lg:py-32 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              The Spring Edit · 2026
            </p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.92] tracking-tight">
              Boba <span className="font-serif-italic">Charms</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
              Quiet jewellery for a particular taste. A small, considered house of charms and accessories — finished by hand, priced within reach.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/shop" className="bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition">
                Shop Now
              </Link>
              <Link to="/collections" className="border border-foreground px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition">
                Explore Collection
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm float-soft">
              <img src={heroImage} alt="Featured charm" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block bg-background border border-border px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">No. 01</p>
              <p className="font-serif-italic text-lg">Crimson Heart</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-border/60 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Hand-Finished</span>
          <span className="hidden sm:inline">·</span>
          <span>Considered Pricing</span>
          <span className="hidden sm:inline">·</span>
          <span>Ships Within 48 Hours</span>
          <span className="hidden sm:inline">·</span>
          <span>Made in India</span>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">The Edit</p>
            <h2 className="font-display text-4xl md:text-5xl">New <span className="font-serif-italic">arrivals</span></h2>
          </div>
          <Link to="/shop" className="hidden md:inline-block text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">
            View all
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* STORY TEASE */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 py-24 lg:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Story</p>
          <p className="font-serif-italic text-2xl md:text-3xl leading-relaxed">
            “Each piece is curated for those with a refined, particular taste, while remaining intentionally priced to stay within reach.”
          </p>
          <Link to="/story" className="inline-block mt-10 text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">
            Read the story
          </Link>
        </div>
      </section>
    </>
  );
}
