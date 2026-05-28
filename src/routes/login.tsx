import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign In — Boba Charms" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-md px-6 py-20 lg:py-28">
      <h1 className="font-display text-4xl text-center mb-3">{mode === "signin" ? "Sign In" : "Create Account"}</h1>
      <p className="text-center text-sm text-muted-foreground mb-12 font-serif-italic">A quieter way to shop the house.</p>

      <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/account" }); }} className="space-y-6">
        {mode === "signup" && (
          <Input label="Full Name" name="name" required />
        )}
        <Input label="Email" name="email" type="email" required />
        <Input label="Password" name="password" type="password" required />
        <button className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90">
          {mode === "signin" ? "Sign In" : "Create Account"}
        </button>
      </form>

      <p className="text-center mt-8 text-sm text-muted-foreground">
        {mode === "signin" ? "New to Boba Charms?" : "Already with us?"}{" "}
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="underline underline-offset-4 text-foreground">
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>

      <Link to="/" className="block text-center mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Return Home</Link>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</label>
      <input {...rest} className="w-full bg-transparent border-b border-border focus:border-foreground py-3 outline-none text-sm" />
    </div>
  );
}
