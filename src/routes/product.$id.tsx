import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { getProduct, formatINR, products } from "@/lib/products";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/product/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Boba Charms` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p className="font-serif-italic text-2xl">Piece not found.</p>
      <Link to="/shop" className="inline-block mt-6 text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">Back to shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const navigate = useNavigate();
  const related = products.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="aspect-square w-full overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="size-full object-cover" />
        </div>

        <div className="lg:pt-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{product.collection}</p>
          <h1 className="font-display text-4xl md:text-5xl mt-4">{product.name}</h1>
          <p className="text-xl mt-6">{formatINR(product.price)}</p>

          <p className="mt-10 text-[15px] leading-[1.8] text-foreground/80 max-w-md">{product.description}</p>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Size</p>
            <div className="inline-flex border border-foreground px-5 py-2 text-xs">OS</div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Quantity</p>
            <div className="inline-flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3"><Minus className="size-3" /></button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3"><Plus className="size-3" /></button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
            <button
              onClick={() => add(product, qty)}
              className="border border-foreground py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition"
            >
              Add to Bag
            </button>
            <button
              onClick={() => { add(product, qty); navigate({ to: "/checkout" }); }}
              className="bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-12 border-t border-border/60 pt-8 space-y-3 text-xs text-muted-foreground">
            <p>· Hand-finished, shipped within 48 hours</p>
            <p>· Considered pricing, intentional craft</p>
            <p>· Care: store dry, away from direct sunlight</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="font-display text-3xl mb-12">You may also <span className="font-serif-italic">love</span></h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
