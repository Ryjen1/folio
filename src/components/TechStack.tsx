import Reveal from "@/components/Reveal";

const techItems = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend Library" },
  { name: "Next.js", category: "React Framework" },
  { name: "Tailwind CSS", category: "CSS Framework" },
  { name: "Spring Boot", category: "Backend Framework" },
  { name: "Java", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "Solidity", category: "Smart Contracts" },
  { name: "Clarity", category: "Smart Contracts" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Version Control" },
  { name: "Docker", category: "Containerization" },
  { name: "Postman", category: "API Testing" },
  { name: "HTML/CSS", category: "Markup & Style" },
  { name: "Soroban", category: "Blockchain" },
];

export default function TechStack() {
  const doubled = [...techItems, ...techItems];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl mb-12 px-6">
        <Reveal>
          <div className="space-y-3 max-w-2xl">
            <p className="eyebrow">Tech Stack</p>
            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              Tech <span className="font-serif italic">stack</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-scroll w-max">
            {doubled.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex-shrink-0 mx-3 px-5 py-3 rounded-full border border-white/[0.08] hover:border-white/20 transition-colors"
              >
                <div className="font-mono text-xs tracking-wider">{item.name}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
