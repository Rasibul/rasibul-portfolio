import { Paper } from "../components/Paper";
import { SectionTitle } from "../components/SectionTitle";

const frontend = ["React", "TypeScript", "Tailwind CSS", "Accessibility", "Performance"];
const backend = ["Node.js", "Express", "PostgreSQL", "REST APIs", "Auth & Security"];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-white/70">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-1 inline-block h-2 w-2 rounded-sm bg-white/40" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-24">
      <Paper className="mx-auto max-w-5xl">
        <SectionTitle kicker="MY TOOLKIT" title="Skills & tools I use daily" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rough border border-white/10 bg-white/5 p-5">
            <div className="mb-3 text-sm font-bold text-white/85">Frontend</div>
            <CheckList items={frontend} />
          </div>
          <div className="rough border border-white/10 bg-white/5 p-5">
            <div className="mb-3 text-sm font-bold text-white/85">Backend</div>
            <CheckList items={backend} />
          </div>
        </div>
      </Paper>
    </section>
  );
}
