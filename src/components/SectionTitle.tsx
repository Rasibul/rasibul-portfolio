export function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      {kicker && (
        <div className="text-xs font-semibold tracking-widest text-white/50">
          {kicker}
        </div>
      )}
      <h2 className="mt-1 text-2xl font-black tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
    </div>
  );
}
