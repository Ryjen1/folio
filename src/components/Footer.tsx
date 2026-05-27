import { GithubIcon, LinkedinIcon, TwitterIcon, TelegramIcon } from "@/components/Icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Emjay
        </Link>

        <div className="flex gap-4">
          <a
            href="https://github.com/Ryjen1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/iyukay"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:qweenjenny9@gmail.com"
            className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://twitter.com/mzyukay"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
          >
            <TwitterIcon size={18} />
          </a>
          <a
            href="https://t.me/GoldBlockk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
          >
            <TelegramIcon size={18} />
          </a>
        </div>

        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} Maryjane Okafor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
