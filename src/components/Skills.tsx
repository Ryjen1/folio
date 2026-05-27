const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing robust APIs and backend systems with scalable architecture.",
    skills: ["Spring Boot", "Node.js", "Java", "REST APIs"],
  },
  {
    title: "Blockchain & Web3",
    description: "Building decentralized applications and smart contracts.",
    skills: ["Solidity", "Clarity", "Soroban", "Stacks", "Ethers.js"],
  },
  {
    title: "Database & Tools",
    description: "Working with databases and modern development tools.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Git", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-3 max-w-2xl mb-12">
          <p className="eyebrow">Expertise</p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
            Skills & <span className="font-serif italic">technologies</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="liquid-glass rounded-2xl p-5 space-y-3 group hover:border-white/20 transition-colors"
            >
              <p className="eyebrow">{cat.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 text-xs rounded-full border border-white/15 text-muted-foreground font-mono tracking-wider"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
