import { Paper } from "../components/Paper";
import { SectionTitle } from "../components/SectionTitle";
import { CardGrid } from "../components/CardGrid";
import { Tag } from "../components/Tag";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Paper className="mx-auto max-w-5xl">
        <SectionTitle
          kicker="THINGS I BUILT"
          title="Projects"
          subtitle="Some actual work — clean UI, solid engineering."
        />
        <CardGrid>
          {projects.map((p) => (
            <div
              key={p.title}
              className="rough border border-white/10 bg-white/5 p-5 transition hover:-translate-y-[2px] hover:bg-white/10"
            >
              <div className="mb-2 h-28 rounded-xl bg-white/10" />
              <div className="text-base font-black">{p.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/65">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t.label} tone={t.tone}>
                    {t.label}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </CardGrid>

        <div className="mt-6">
          <a
            href="#contact"
            className="rough inline-flex border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            View more / Contact →
          </a>
        </div>
      </Paper>
    </section>
  );
}
