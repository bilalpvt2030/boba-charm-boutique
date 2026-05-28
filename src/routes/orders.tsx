import { createFileRoute, Link } from "@tanstack/react-router";
import { products, formatINR } from "@/lib/products";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [{ title: "Orders — Boba Charms" }] }),
  component: OrdersPage,
});

const mockOrders = [
  { id: "BC-2042", date: "12 March 2026", status: "Delivered", items: [products[0], products[2]] },
  { id: "BC-2031", date: "28 February 2026", status: "In Transit", items: [products[1]] },
];

function OrdersPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 lg:px-12 py-20 lg:py-28">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">My Orders</p>
      <h1 className="font-display text-5xl mb-12">Your <span className="font-serif-italic">history</span></h1>

      <div className="space-y-6">
        {mockOrders.map((o) => {
          const total = o.items.reduce((s, p) => s + p.price, 0);
          return (
            <div key={o.id} className="border border-border bg-background p-8">
              <div className="flex flex-wrap justify-between gap-4 pb-6 border-b border-border/60">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Order</p>
                  <p className="mt-1">{o.id}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Date</p>
                  <p className="mt-1">{o.date}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Status</p>
                  <p className="mt-1 font-serif-italic">{o.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Total</p>
                  <p className="mt-1">{formatINR(total)}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                {o.items.map((p) => (
                  <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="flex gap-4 items-center">
                    <div className="aspect-square w-20 overflow-hidden bg-secondary">
                      <img src={p.image} alt={p.name} className="size-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{formatINR(p.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
