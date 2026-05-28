import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Boba Charms" },
      { name: "description", content: "The story behind Boba Charms — a small, considered house of jewellery." },
    ],
  }),
  component: StoryPage,
});

const paragraphs = [
  "Boba Charms was born from a personal obsession with jewellery and the search for pieces that felt both distinctive and accessible.",
  "Finding charms that balanced trend, individuality, and affordability was never simple — and that gap became the foundation of this brand.",
  "Each piece is curated for those with a refined, particular taste, while remaining intentionally priced to stay within reach.",
];

function StoryPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-12 py-24 lg:py-32">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Story</p>
      <h1 className="font-display text-5xl md:text-6xl mb-16">A small <span className="font-serif-italic">house</span>, quietly built.</h1>
      <div className="space-y-10 text-[17px] leading-[1.75] text-foreground/85 max-w-[600px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
