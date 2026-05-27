import { GithubIcon, LinkedinIcon, TwitterIcon, TelegramIcon } from "@/components/Icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6">
        <Link href="/" className="font-mono text-xs tracking-[0.3em] uppercase text-foreground">
          Emjay
        </Link>

        <div className="flex gap-4">
          <a
            href="https://github.com/Ryjen1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/iyukay"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="https://twitter.com/mzyukay"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
          >
            <TwitterIcon size={16} />
          </a>
          <a
            href="https://t.me/GoldBlockk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
          >
            <TelegramIcon size={16} />
          </a>
          <a
            href="mailto:qweenjenny9@gmail.com"
            className="p-3 rounded-full border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/40 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Maryjane Okafor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
