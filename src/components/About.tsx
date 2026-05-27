import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="space-y-3 max-w-2xl mb-12">
            <p className="eyebrow">About Me</p>
            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              Building <span className="font-serif italic">digital experiences</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={100}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                I&apos;m Maryjane Okafor, a Full Stack Developer based in Lagos,
                Nigeria. I specialize in building scalable web applications,
                decentralized solutions, and modern user experiences using React,
                Next.js, Spring Boot, and Tailwind CSS.
              </p>
              <p>
                With a strong foundation in both traditional web development and
                blockchain technology, I bring a unique perspective to every
                project. I&apos;m passionate about writing clean, maintainable code
                and translating complex problems into intuitive, user-friendly
                solutions.
              </p>
              <p>
                Beyond coding, I&apos;m deeply interested in Web3 innovation, AI
                agents, and emerging technologies. I enjoy exploring new
                frameworks, contributing to open-source projects, and staying at
                the forefront of tech trends.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Frontend", items: "React, Next.js, TypeScript" },
              { label: "Backend", items: "Spring Boot, Node.js" },
              { label: "Blockchain", items: "Solidity, Clarity, Soroban" },
              { label: "Tools", items: "Git, Docker, Postman" },
            ].map((card, i) => (
              <Reveal key={card.label} delay={200 + i * 80}>
                <div className="liquid-glass rounded-2xl p-5 space-y-2 h-full">
                  <p className="eyebrow">{card.label}</p>
                  <p className="text-sm text-muted-foreground">{card.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
