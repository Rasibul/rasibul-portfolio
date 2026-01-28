const items = [
  { id: "home", label: "Start", tone: "bg-indigo-500/20 border-indigo-300/30" },
  { id: "toolkit", label: "Toolkit", tone: "bg-cyan-500/20 border-cyan-300/30" },
  { id: "projects", label: "Projects", tone: "bg-lime-500/20 border-lime-300/30" },
  { id: "blog", label: "Blog", tone: "bg-amber-500/20 border-amber-300/30" },
  { id: "contact", label: "Contact", tone: "bg-rose-500/20 border-rose-300/30" },
];

export function SideNav() {
  return (
    <div className="fixed left-3 top-24 z-50 hidden flex-col gap-2 md:flex">
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={[
            "w-16 rounded-lg border px-2 py-1 text-[11px] font-semibold",
            "text-white/90 shadow-sm transition hover:-translate-y-[1px] hover:shadow",
            "backdrop-blur",
            it.tone,
          ].join(" ")}
        >
          {it.label}
        </a>
      ))}
    </div>
  );
}
