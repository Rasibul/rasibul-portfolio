import { Paper } from "../components/Paper";
import { SectionTitle } from "../components/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Paper className="mx-auto max-w-5xl">
        <SectionTitle
          kicker="LET'S CONNECT"
          title="Contact"
          subtitle="Tell me about your project. I reply fast."
        />

        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Hook this form to EmailJS / backend later 🙂");
          }}
        >
          <label className="grid gap-2 text-sm text-white/70">
            Name
            <input
              className="rough border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-300/40"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm text-white/70">
            Email
            <input
              type="email"
              className="rough border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-300/40"
              placeholder="you@email.com"
            />
          </label>

          <label className="md:col-span-2 grid gap-2 text-sm text-white/70">
            Message
            <textarea
              className="rough min-h-[120px] border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-300/40"
              placeholder="What are you building?"
            />
          </label>

          <div className="md:col-span-2 flex items-center gap-3">
            <button
              className="rough border border-cyan-300/30 bg-cyan-500/20 px-4 py-2 text-sm font-semibold hover:bg-cyan-500/25"
              type="submit"
            >
              Send message
            </button>
            <span className="text-xs text-white/50">
              (Later: connect EmailJS / backend API)
            </span>
          </div>
        </form>
      </Paper>
    </section>
  );
}
