import { Link } from "@tanstack/react-router";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/story", label: "Story" },
];

export function Navbar() {
  const open = useCart((s) => s.open);
  const count = useCart((s) => s.count());
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-12">
        {/* Hamburger - left on mobile */}
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          aria-expanded={mobile}
        >
          {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-foreground/80">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Logo - center */}
        <Link to="/" className="font-display text-xl lg:text-3xl tracking-wide absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          Boba Charms
        </Link>

        {/* Icons - right */}
        <div className="flex items-center gap-4 text-foreground/80">
          <Link to="/account" aria-label="Account" className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-foreground">
            <User className="size-[18px]" strokeWidth={1.25} />
          </Link>
          <button onClick={open} aria-label="Cart" className="relative min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-foreground">
            <ShoppingBag className="size-[18px]" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-background">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobile && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm uppercase tracking-[0.2em]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="min-h-[44px] flex items-center"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/account"
              onClick={() => setMobile(false)}
              className="min-h-[44px] flex items-center"
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
