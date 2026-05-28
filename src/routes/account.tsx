import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — Boba Charms" }] }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-12 py-20 lg:py-28">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">My Account</p>
      <h1 className="font-display text-5xl mb-12">Welcome <span className="font-serif-italic">back</span></h1>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card title="Profile" desc="Manage your name, email, and contact." />
        <Card title="Addresses" desc="Saved shipping addresses for faster checkout." />
        <Link to="/orders" className="block"><Card title="Orders" desc="Track previous purchases and reorder pieces." /></Link>
        <Card title="Wishlist" desc="Pieces you've been quietly admiring." />
      </div>

      <div className="mt-12 flex gap-4">
        <Link to="/login" className="border border-foreground px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition">
          Sign In
        </Link>
        <Link to="/login" className="px-6 py-3 text-[11px] uppercase tracking-[0.22em] underline underline-offset-8">
          Create Account
        </Link>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-border p-8 hover-lift bg-background">
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
