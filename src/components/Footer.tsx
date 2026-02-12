import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Renders the Instagram logo icon as an inline SVG.
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Renders a raw footer that acts as the only contact: Instagram.
export function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="text-center">
          <p className="mx-auto max-w-2xl text-sm text-zinc-600">
            Minimal process. Clean delivery. If the work fits, send a short
            brief + deadline.
          </p>

          <div className="mt-4">
            <Link
              href={siteConfig.socials.instagram}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-zinc-900 underline hover:text-black"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </Link>
          </div>

          <div className="mt-8 text-xs text-zinc-500">
            © {new Date().getFullYear()} KAHOZONE
          </div>
        </div>
      </div>
    </footer>
  );
}
