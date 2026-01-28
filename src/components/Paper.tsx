import type { PropsWithChildren } from "react";

type PaperProps = PropsWithChildren<{
  className?: string;
  pinned?: boolean;
}>;

export function Paper({ children, className = "", pinned }: PaperProps) {
  return (
    <div
      className={[
        "relative rough bg-[rgb(var(--panel))] shadow-paper",
        "border border-white/10",
        "px-6 py-6 md:px-8 md:py-7",
        className,
      ].join(" ")}
    >
      {pinned && (
        <div className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-[rgb(var(--warn))] shadow" />
      )}
      {children}
    </div>
  );
}
