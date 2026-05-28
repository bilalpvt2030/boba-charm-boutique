import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/store/cart";
import { formatINR } from "@/lib/products";
import { Upload, Check } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Boba Charms" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  if (submitted) {
    return (
      <section className="mx-auto max-w-xl px-6 py-32 text-center">
        <div className="mx-auto size-16 rounded-full bg-accent/40 grid place-items-center mb-8">
          <Check className="size-7" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-4xl">Payment Submitted Successfully</h1>
        <p className="mt-6 text-muted-foreground font-serif-italic text-lg">
          Thank you. Your order is being prepared with care.
        </p>
        <Link to="/" onClick={clear} className="inline-block mt-10 border border-foreground px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-5 gap-12">
      <div className="lg:col-span-3">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Secure Checkout</p>
        <h1 className="font-display text-4xl mb-12">Complete your <span className="font-serif-italic">order</span></h1>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="space-y-6"
        >
          <Field label="Full Name" name="name" required />
          <Field label="Address" name="address" required />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Pincode" name="pincode" required />
            <Field label="Location" name="location" required />
          </div>
          <Field label="Phone Number" name="phone" type="tel" required />

          <div className="pt-6 border-t border-border/60">
            <h3 className="font-display text-2xl mb-2">Payment</h3>
            <p className="text-xs text-muted-foreground mb-6">Scan our UPI QR, then provide the transaction reference below.</p>

            <Field label="UPI Transaction ID" name="upi" required />

            <div className="mt-6">
              <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Upload Payment Screenshot
              </label>
              <label className="flex items-center justify-center gap-3 border border-dashed border-border bg-background px-6 py-10 cursor-pointer hover:bg-secondary/40 transition">
                <Upload className="size-4" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground">{fileName || "Choose file"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-foreground text-background py-5 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 mt-8">
            Submit Order
          </button>
        </form>
      </div>

      <aside className="lg:col-span-2 lg:pl-8 lg:border-l border-border/60">
        <h3 className="font-display text-2xl mb-8">Your Order</h3>
        {items.length === 0 ? (
          <p className="text-muted-foreground text-sm">Your bag is empty. <Link to="/shop" className="underline underline-offset-4">Browse</Link></p>
        ) : (
          <>
            <ul className="space-y-6">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4">
                  <div className="aspect-square w-20 shrink-0 overflow-hidden bg-secondary">
                    <img src={product.image} alt={product.name} className="size-full object-cover" />
                  </div>
                  <div className="flex-1 flex justify-between gap-2">
                    <div>
                      <p className="text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">× {qty}</p>
                    </div>
                    <p className="text-sm">{formatINR(product.price * qty)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border/60 space-y-3 text-sm">
              <Row label="Subtotal" value={formatINR(subtotal())} />
              <Row label="Shipping" value="Free" />
              <div className="pt-3 border-t border-border/60 flex justify-between text-base">
                <span>Total</span>
                <span>{formatINR(subtotal())}</span>
              </div>
            </div>
          </>
        )}
      </aside>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-foreground py-3 outline-none text-sm transition-colors"
      />
    </div>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between text-muted-foreground"><span>{label}</span><span>{value}</span></div>;
}
