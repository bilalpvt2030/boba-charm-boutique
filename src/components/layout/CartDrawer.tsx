import { Link } from "@tanstack/react-router";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/store/cart";
import { formatINR } from "@/lib/products";
import { useEffect } from "react";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full sm:w-[440px] bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-border/60">
          <h3 className="font-display text-xl">Your Bag</h3>
          <button onClick={close} aria-label="Close"><X className="size-4" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
              <p className="font-serif-italic text-2xl mb-3">Your bag awaits.</p>
              <p className="text-sm">Begin with a piece that feels like yours.</p>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4">
                  <div className="aspect-square w-24 shrink-0 overflow-hidden rounded-sm bg-secondary">
                    <img src={product.image} alt={product.name} className="size-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-sm">{product.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">Size · OS</p>
                      </div>
                      <p className="text-sm">{formatINR(product.price * qty)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button onClick={() => setQty(product.id, qty - 1)} className="p-2"><Minus className="size-3" /></button>
                        <span className="w-8 text-center text-xs">{qty}</span>
                        <button onClick={() => setQty(product.id, qty + 1)} className="p-2"><Plus className="size-3" /></button>
                      </div>
                      <button onClick={() => remove(product.id)} className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border/60 px-8 py-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em]">Subtotal</span>
              <span className="text-sm">{formatINR(subtotal())}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping calculated at checkout.</p>
            <Link
              to="/checkout"
              onClick={close}
              className="block w-full bg-foreground text-background text-center py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
