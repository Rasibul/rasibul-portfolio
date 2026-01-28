import type { PropsWithChildren } from "react";

type StickyNoteProps = PropsWithChildren<{
  title?: string;
  className?: string;
  tone?: "cyan" | "amber" | "lime" | "rose";
}>;

const toneMap: Record<NonNullable<StickyNoteProps["tone"]>, string> = {
  cyan: "bg-cyan-500/15 border-cyan-300/30",
  amber: "bg-amber-500/15 border-amber-300/30",
  lime: "bg-lime-500/15 border-lime-300/30",
  rose: "bg-rose-500/15 border-rose-300/30",
};

export function StickyNote({
  title,
  children,
  className = "",
  tone = "cyan",
}: StickyNoteProps) {
  return (
    <aside
      className={[
        "rough border px-4 py-4 shadow-lift backdrop-blur",
        toneMap[tone],
        className,
      ].join(" ")}
    >
      {title && (
        <div className="mb-2 text-xs font-semibold tracking-wide text-white/90">
          {title}
        </div>
      )}
      <div className="text-xs leading-5 text-white/80">{children}</div>
    </aside>
  );
}
