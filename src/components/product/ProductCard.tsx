import { Link, useNavigate } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/products";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const navigate = useNavigate();

  return (
    <article className="group flex flex-col">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative block aspect-square w-full overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </Link>

      <div className="mt-5 flex flex-col items-start gap-1.5">
        <Link to="/product/$id" params={{ id: product.id }} className="text-[15px] tracking-wide hover:underline underline-offset-4">
          {product.name}
        </Link>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Size · {product.size}</p>
        <p className="text-sm mt-1">{formatINR(product.price)}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => add(product)}
          className="border border-foreground/80 py-3 text-[10px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors"
        >
          Add to Bag
        </button>
        <button
          onClick={() => { add(product); navigate({ to: "/checkout" }); }}
          className="bg-foreground text-background py-3 text-[10px] uppercase tracking-[0.22em] hover:opacity-90"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
