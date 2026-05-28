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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden"
          aria-label="Menu"
        >
          {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-foreground/80">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className="font-display text-2xl lg:text-3xl tracking-wide">
          Boba Charms
        </Link>

        <div className="flex items-center gap-5 text-foreground/80">
          <Link to="/account" aria-label="Account" className="hidden sm:inline-flex hover:text-foreground">
            <User className="size-[18px]" strokeWidth={1.25} />
          </Link>
          <button onClick={open} aria-label="Cart" className="relative hover:text-foreground">
            <ShoppingBag className="size-[18px]" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-foreground text-[9px] text-background">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm uppercase tracking-[0.2em]">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMobile(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/account" onClick={() => setMobile(false)}>Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
