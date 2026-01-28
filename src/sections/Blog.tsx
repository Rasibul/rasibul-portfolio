import { Paper } from "../components/Paper";
import { SectionTitle } from "../components/SectionTitle";
import { CardGrid } from "../components/CardGrid";
import { posts } from "../data/posts";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-24">
      <Paper className="mx-auto max-w-5xl">
        <SectionTitle
          kicker="RANDOM THOUGHTS"
          title="Writing"
          subtitle="Short notes about dev, product, and building."
        />
        <CardGrid>
          {posts.map((p) => (
            <article
              key={p.title}
              className="rough border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <div className="text-xs font-semibold text-white/50">{p.date}</div>
              <h3 className="mt-2 text-lg font-black leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{p.desc}</p>
              <button className="mt-4 rough border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold hover:bg-white/10">
                Read →
              </button>
            </article>
          ))}
        </CardGrid>
      </Paper>
    </section>
  );
}
