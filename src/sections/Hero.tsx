import { Paper } from "../components/Paper";
import { Tag } from "../components/Tag";

export function Hero() {
  return (
    <section id="home" className="pt-10">
      <Paper pinned className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="rough border border-white/10 bg-white/5 p-3">
            <div className="aspect-square w-full rounded-xl bg-white/10" />
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag tone="cyan">Frontend</Tag>
              <Tag tone="lime">Backend</Tag>
              <Tag tone="amber">UI</Tag>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50">
              WEB DEVELOPER • BUILDER • PROBLEM SOLVER
            </p>

            <h1 className="mt-2 text-4xl font-black leading-tight">
              It&apos;s{" "}
              <span className="text-[rgb(var(--accent2))] underline decoration-[rgb(var(--accent))]">
                YourName
              </span>
              .
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              I build modern web apps with TypeScript + React. I care about clean
              UX, performance, and shipping.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rough border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                See work →
              </a>
              <a
                href="#contact"
                className="rough border border-rose-300/30 bg-rose-500/20 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500/25"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
}
