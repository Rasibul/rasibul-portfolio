import { SideNav } from "./components/SideNav";
import { StickyNote } from "./components/StickyNote";
import { Hero } from "./sections/Hero";
import { Toolkit } from "./sections/Toolkit";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-grain">
      <SideNav />

      {/* Right floating notes */}
      <div className="pointer-events-none fixed right-4 top-24 z-40 hidden w-56 flex-col gap-3 lg:flex">
        <StickyNote title="Quick note" tone="cyan">
          • Keep sections clean<br />
          • Add real screenshots later<br />
          • Make CTA obvious
        </StickyNote>
        <StickyNote title="Checklist" tone="amber">
          ◻ Projects (3-6)<br />
          ◻ Blog (3 posts)<br />
          ◻ Contact form
        </StickyNote>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <Hero />
        <div className="mt-10 space-y-10">
          <Toolkit />
          <Projects />
          <Blog />
          <Contact />
        </div>

        <footer className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} YourName — Built with React + TypeScript
        </footer>
      </main>
    </div>
  );
}
