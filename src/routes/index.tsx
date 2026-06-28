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
        <div className="mx-auto grid max-w-7xl px-6 py-16 lg:px-12 lg:py-32 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              The Spring Edit · 2026
            </p>
            <h1
              className="font-display leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 10vw, 8.5rem)' }}
            >
              Boba <span className="font-serif-italic">Charms</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              Quiet jewellery for a particular taste. A small, considered house of charms and accessories — finished by hand, priced within reach.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="block w-full sm:w-auto text-center bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
              >
                Shop Now
              </Link>
              <Link
                to="/collections"
                className="block w-full sm:w-auto text-center border border-foreground px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition min-h-[44px] flex items-center justify-center"
              >
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm float-soft">
              <img
                src={heroImage}
                alt="Featured charm"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block bg-background border border-border px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">No. 01</p>
              <p className="font-serif-italic text-lg">Crimson Heart</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border/60 py-5 overflow-hidden">
        <p className="text-[11px] uppercase tracking-[0.3em] text-center text-muted-foreground">
          Hand-Finished &nbsp;·&nbsp; Considered Pricing &nbsp;·&nbsp; Ships Within 48 Hours &nbsp;·&nbsp; Made in India
        </p>
      </div>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">The Edit</p>
            <h2 className="font-display text-4xl md:text-5xl">
              New <span className="font-serif-italic">arrivals</span>
            </h2>
          </div>
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.22em] underline underline-offset-8 min-h-[44px] flex items-center">
            View all
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* STORY TEASE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Story</p>
            <blockquote className="font-serif-italic text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              “Each piece is curated for those with a refined, particular taste, while remaining intentionally priced to stay within reach.”
            </blockquote>
            <Link
              to="/story"
              className="mt-8 inline-flex items-center text-[11px] uppercase tracking-[0.22em] underline underline-offset-8 min-h-[44px]"
            >
              Read the story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
