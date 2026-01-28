type TagProps = { children: string; tone?: "cyan" | "lime" | "amber" | "rose" };

const tones: Record<NonNullable<TagProps["tone"]>, string> = {
  cyan: "border-cyan-300/30 bg-cyan-500/15 text-cyan-100",
  lime: "border-lime-300/30 bg-lime-500/15 text-lime-100",
  amber: "border-amber-300/30 bg-amber-500/15 text-amber-100",
  rose: "border-rose-300/30 bg-rose-500/15 text-rose-100",
};

export function Tag({ children, tone = "cyan" }: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
