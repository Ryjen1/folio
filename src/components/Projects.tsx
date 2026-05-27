import { GithubIcon } from "@/components/Icons";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "BlockBelle",
    description:
      "A Web3-based chat application built specifically for women in the blockchain space. Leverages ENS for user verification with a WhatsApp-like interface.",
    tags: ["JavaScript", "Web3", "ENS", "React"],
    github: "https://github.com/Ryjen1/BlockBelle",
    image: "/projects/blockbelle.svg",
  },
  {
    title: "Consilium",
    description:
      "Three specialist AI agents read SoSoValue Terminal, arbitrate their disagreement, and emit one sized trade on SoDEX. Opinion aggregation for on-chain trading.",
    tags: ["Python", "AI Agents", "DeFi", "Trading"],
    github: "https://github.com/Ryjen1/Consilium",
    image: "/projects/consilium.svg",
  },
  {
    title: "WageShield",
    description:
      "Confidential wage-theft claims platform built on Fhenix. Enables secure, private submission of workplace compensation disputes using fully homomorphic encryption.",
    tags: ["TypeScript", "FHE", "Fhenix", "Solidity"],
    github: "https://github.com/Ryjen1/WageShield",
    image: "/projects/wageshield.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="space-y-3 max-w-2xl mb-12">
            <p className="eyebrow">Portfolio</p>
            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              Featured <span className="font-serif italic">works</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Projects I&apos;ve built and collaborated on
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block liquid-glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-200"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden bg-[#0a0d14]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">{project.title}</p>
                    <div className="flex gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      <GithubIcon size={14} />
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 text-muted-foreground font-mono tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
