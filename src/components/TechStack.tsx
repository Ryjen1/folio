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
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to design, develop and deploy modern
            full-stack applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll w-max">
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex-shrink-0 mx-3 px-5 py-3 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-xs text-text-muted">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
