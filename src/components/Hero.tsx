import { GithubIcon, LinkedinIcon, TwitterIcon, TelegramIcon } from "@/components/Icons";
import { Mail, MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60" aria-hidden="true">
        <div className="h-[80vmin] w-[80vmin] max-h-[640px] max-w-[640px] rounded-full bg-[radial-gradient(circle,rgba(124,141,240,0.15)_0%,transparent_70%)]" />
      </div>

      <p className="eyebrow relative z-10 mb-6 sm:mb-8">
        Full Stack Developer · Web3 &amp; AI Explorer
      </p>

      <h1 className="relative z-10 max-w-4xl text-center text-3xl leading-tight font-medium text-foreground sm:text-5xl md:text-7xl tracking-tight">
        Building digital <span className="font-serif italic">experiences</span> that ship.
      </h1>

      <p className="relative z-10 mt-8 max-w-2xl text-center text-sm text-muted-foreground sm:mt-10 sm:text-base md:text-lg leading-relaxed">
        I&apos;m Maryjane Okafor — a Full Stack Developer based in Lagos, Nigeria.
        I specialize in React, Spring Boot, Solidity, and building decentralized
        applications that solve real-world problems.
      </p>

      <div className="relative z-10 mt-10 flex items-center gap-2 text-muted-foreground sm:mt-12">
        <MapPin size={14} />
        <span className="font-mono text-xs tracking-widest uppercase">Lagos, Nigeria</span>
      </div>

      <div className="relative z-10 mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
        <a href="#projects" className="pill-btn pill-btn-primary">
          <span>View My Work</span>
          <span aria-hidden="true">→</span>
        </a>
        <a href="mailto:qweenjenny9@gmail.com" className="pill-btn pill-btn-ghost">
          <span>Let&apos;s Talk</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative z-10 mt-10 flex items-center gap-4">
        <a
          href="https://github.com/Ryjen1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
        >
          <GithubIcon size={18} />
        </a>
        <a
          href="https://linkedin.com/in/iyukay"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
        >
          <LinkedinIcon size={18} />
        </a>
        <a
          href="https://twitter.com/mzyukay"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
        >
          <TwitterIcon size={18} />
        </a>
        <a
          href="https://t.me/GoldBlockk"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
        >
          <TelegramIcon size={18} />
        </a>
        <a
          href="mailto:qweenjenny9@gmail.com"
          className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>

      <div className="relative z-10 mt-16 flex gap-8 sm:gap-12">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">3+</div>
          <div className="eyebrow mt-1">Years Exp</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">15+</div>
          <div className="eyebrow mt-1">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">10+</div>
          <div className="eyebrow mt-1">Tech Stack</div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
