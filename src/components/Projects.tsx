import { GithubIcon } from "@/components/Icons";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BlockBelle",
    description:
      "A Web3-based chat application built specifically for women in the blockchain space. Leverages ENS for user verification with a WhatsApp-like interface.",
    tags: ["JavaScript", "Web3", "ENS", "React"],
    github: "https://github.com/Ryjen1/BlockBelle",
  },
  {
    title: "Consilium",
    description:
      "Three specialist AI agents read SoSoValue Terminal, arbitrate their disagreement, and emit one sized trade on SoDEX. Opinion aggregation for on-chain trading.",
    tags: ["Python", "AI Agents", "DeFi", "Trading"],
    github: "https://github.com/Ryjen1/Consilium",
  },
  {
    title: "WageShield",
    description:
      "Confidential wage-theft claims platform built on Fhenix. Enables secure, private submission of workplace compensation disputes using FHE.",
    tags: ["TypeScript", "FHE", "Fhenix", "Solidity"],
    github: "https://github.com/Ryjen1/WageShield",
  },
  {
    title: "Kairo",
    description:
      "Aerodrome Safe LP Agent. Your agent acts, Kairo decides. Automated liquidity provision with intelligent decision-making on Aerodrome.",
    tags: ["Solidity", "AI Agent", "DeFi", "Aerodrome"],
    github: "https://github.com/Ryjen1/Kairo",
  },
  {
    title: "VoxTrade",
    description:
      "Talk to your Solana wallet. Voice-native DeFi powered by ElevenLabs Conversational AI + Jupiter. Built for Dev3pack 2026.",
    tags: ["TypeScript", "Solana", "AI", "Voice"],
    github: "https://github.com/Ryjen1/voxtrade",
  },
  {
    title: "ClarityDEX",
    description:
      "A decentralized exchange built on the Stacks blockchain using Clarity smart contracts. Features token swaps and liquidity pools.",
    tags: ["TypeScript", "Clarity", "Stacks", "DeFi"],
    github: "https://github.com/Ryjen1/ClarityDEX",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Works</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Projects I&apos;ve built and collaborated on
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl bg-surface border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-4xl font-bold gradient-text opacity-30">
                  {project.title.slice(0, 2)}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text transition-colors"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    <ExternalLink
                      size={18}
                      className="text-text-muted group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                <p className="text-text-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ryjen1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary text-text font-medium rounded-lg transition-colors"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
