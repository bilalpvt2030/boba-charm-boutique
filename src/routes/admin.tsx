import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, formatINR } from "@/lib/products";
import { Pencil, Trash2, Plus, Upload, QrCode } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Boba Charms" }] }),
  component: AdminPage,
});

function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [tab, setTab] = useState<"products" | "orders" | "settings">("products");

  if (!auth) {
    return (
      <section className="mx-auto max-w-md px-6 py-32">
        <h1 className="font-display text-4xl text-center mb-12">Admin Sign In</h1>
        <form onSubmit={(e) => { e.preventDefault(); setAuth(true); }} className="space-y-6">
          <Field label="Admin Email" name="email" type="email" />
          <Field label="Password" name="password" type="password" />
          <button className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.22em]">Enter Dashboard</button>
        </form>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Atelier</p>
          <h1 className="font-display text-4xl">Admin <span className="font-serif-italic">Dashboard</span></h1>
        </div>
        <button onClick={() => setAuth(false)} className="text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">Sign out</button>
      </div>

      <div className="flex gap-8 border-b border-border mb-10">
        {(["products", "orders", "settings"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-4 text-[11px] uppercase tracking-[0.22em] border-b-2 transition ${
              tab === t ? "border-foreground" : "border-transparent text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "products" && <ProductsTab />}
      {tab === "orders" && <OrdersTab />}
      {tab === "settings" && <SettingsTab />}
    </section>
  );
}

function ProductsTab() {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <p className="text-sm text-muted-foreground">{products.length} pieces in catalogue</p>
        <button className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-[11px] uppercase tracking-[0.22em]">
          <Plus className="size-3" /> Add Product
        </button>
      </div>
      <div className="border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr className="text-left text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Collection</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="p-4"><div className="size-12 overflow-hidden bg-secondary"><img src={p.image} alt="" className="size-full object-cover" /></div></td>
                <td className="p-4">{p.name}</td>
                <td className="p-4 text-muted-foreground">{p.collection}</td>
                <td className="p-4">{formatINR(p.price)}</td>
                <td className="p-4 text-right">
                  <div className="inline-flex gap-2 text-muted-foreground">
                    <button className="p-2 hover:text-foreground"><Pencil className="size-3.5" /></button>
                    <button className="p-2 hover:text-destructive"><Trash2 className="size-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrdersTab() {
  const orders = [
    { id: "BC-2042", customer: "A. Mehta", total: 718, status: "Delivered" },
    { id: "BC-2031", customer: "S. Iyer", total: 499, status: "In Transit" },
    { id: "BC-2027", customer: "R. Kapoor", total: 199, status: "Processing" },
  ];
  return (
    <div className="border border-border">
      <table className="w-full text-sm">
        <thead className="bg-secondary/50 text-left text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <tr><th className="p-4">Order</th><th className="p-4">Customer</th><th className="p-4">Total</th><th className="p-4">Status</th></tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t border-border">
              <td className="p-4">{o.id}</td>
              <td className="p-4">{o.customer}</td>
              <td className="p-4">{formatINR(o.total)}</td>
              <td className="p-4 font-serif-italic">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
      <div className="border border-border p-8">
        <h3 className="font-display text-2xl mb-2">Brand QR</h3>
        <p className="text-sm text-muted-foreground mb-6">Upload the UPI QR shown at checkout.</p>
        <label className="flex flex-col items-center justify-center gap-3 border border-dashed border-border py-12 cursor-pointer hover:bg-secondary/40">
          <QrCode className="size-6" strokeWidth={1.5} />
          <span className="text-xs text-muted-foreground">Upload QR Image</span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
      <div className="border border-border p-8">
        <h3 className="font-display text-2xl mb-2">Hero Image</h3>
        <p className="text-sm text-muted-foreground mb-6">Replace the featured hero artwork.</p>
        <label className="flex flex-col items-center justify-center gap-3 border border-dashed border-border py-12 cursor-pointer hover:bg-secondary/40">
          <Upload className="size-6" strokeWidth={1.5} />
          <span className="text-xs text-muted-foreground">Upload Image</span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} className="w-full bg-transparent border-b border-border focus:border-foreground py-3 outline-none text-sm" />
    </div>
  );
}
