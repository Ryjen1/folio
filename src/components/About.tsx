export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building Digital Experiences
            </h3>
            <p className="text-text-muted leading-relaxed">
              I&apos;m Maryjane Okafor, a Full Stack Developer based in Lagos,
              Nigeria. I specialize in building scalable web applications,
              decentralized solutions, and modern user experiences using React,
              Next.js, Spring Boot, and Tailwind CSS.
            </p>
            <p className="text-text-muted leading-relaxed">
              With a strong foundation in both traditional web development and
              blockchain technology, I bring a unique perspective to every
              project. I&apos;m passionate about writing clean, maintainable code and
              translating complex problems into intuitive, user-friendly
              solutions.
            </p>
            <p className="text-text-muted leading-relaxed">
              Beyond coding, I&apos;m deeply interested in Web3 innovation, AI
              agents, and emerging technologies. I enjoy exploring new
              frameworks, contributing to open-source projects, and staying at
              the forefront of tech trends.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Frontend", items: "React, Next.js, TypeScript" },
              { label: "Backend", items: "Spring Boot, Node.js" },
              { label: "Blockchain", items: "Solidity, Clarity, Soroban" },
              { label: "Tools", items: "Git, Docker, Postman" },
            ].map((card) => (
              <div
                key={card.label}
                className="p-4 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
              >
                <h4 className="font-semibold text-sm mb-1 gradient-text">
                  {card.label}
                </h4>
                <p className="text-xs text-text-muted">{card.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
