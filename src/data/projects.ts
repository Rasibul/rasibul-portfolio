export type Project = {
  title: string;
  desc: string;
  tags: { label: string; tone?: "cyan" | "lime" | "amber" | "rose" }[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "QR Monitor",
    desc: "A tool that tracks scans, logs events, and shows quick insights.",
    tags: [
      { label: "React", tone: "cyan" },
      { label: "Node", tone: "lime" },
      { label: "Postgres", tone: "amber" },
    ],
  },
  {
    title: "Robi Avenetic",
    desc: "Landing + admin panel with clean UX and fast load time.",
    tags: [
      { label: "TypeScript", tone: "cyan" },
      { label: "UI", tone: "amber" },
      { label: "API", tone: "lime" },
    ],
  },
  {
    title: "SAF",
    desc: "A portfolio-style product page with sections & animations.",
    tags: [
      { label: "Vite", tone: "cyan" },
      { label: "Tailwind", tone: "lime" },
      { label: "Deploy", tone: "rose" },
    ],
  },
];
