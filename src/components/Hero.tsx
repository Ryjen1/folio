import { GithubIcon, LinkedinIcon, TwitterIcon, TelegramIcon } from "@/components/Icons";
import { Mail, MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-sm text-text-muted">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Maryjane Okafor
          </h1>

          <p className="text-xl sm:text-2xl gradient-text font-semibold">
            Full Stack Developer
          </p>

          <div className="flex items-center gap-2 text-text-muted justify-center md:justify-start">
            <MapPin size={16} />
            <span>Lagos, Nigeria</span>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/Ryjen1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/iyukay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:qweenjenny9@gmail.com"
              className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://twitter.com/mzyukay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
            >
              <TwitterIcon size={20} />
            </a>
            <a
              href="https://t.me/GoldBlockk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
            >
              <TelegramIcon size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="mailto:qweenjenny9@gmail.com"
              className="px-6 py-3 border border-border hover:border-primary text-text font-medium rounded-lg transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float">
              <div className="w-72 h-72 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-bold gradient-text">Emjay</div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-6">
              <div className="text-center px-4 py-2 rounded-xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-text-muted">Years Exp</div>
              </div>
              <div className="text-center px-4 py-2 rounded-xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-xs text-text-muted">Projects</div>
              </div>
              <div className="text-center px-4 py-2 rounded-xl bg-surface border border-border">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-text-muted">Tech Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
