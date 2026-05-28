import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">Boba Charms</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Quiet jewellery for a particular taste. Hand-curated charms and boutique accessories.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.22em] mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop">All Charms</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.22em] mb-4">House</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.22em] mb-4">Care</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            care@bobacharms.com<br/>Mon — Sat, 11am to 7pm IST
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        © {new Date().getFullYear()} Boba Charms — All rights reserved
      </div>
    </footer>
  );
}
