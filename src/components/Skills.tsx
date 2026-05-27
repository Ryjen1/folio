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
    <section id="skills" className="py-24 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to design, develop and deploy modern
            full-stack applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
              <p className="text-text-muted text-sm mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
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
