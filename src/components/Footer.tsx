import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 pt-10 pb-8 md:pt-14 md:pb-10 bg-stone-900 text-stone-100 shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.18)]">
      <div className="mx-auto max-w-7xl">

        {/* ── Top: blurbs left · menu right ─────────────────────── */}
        <div className="flex items-start justify-between mb-10 md:mb-14">

          {/* Left accordion-style sections */}
          <div className="max-w-sm">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
                Our Studio
              </p>
              <p className="text-sm font-normal leading-[1.75] text-stone-400">
                A small, focused practice founded in 2020 by Sanjan Hoode and
                Shashank Shetty. Based in Bengaluru, working across India.
              </p>
            </div>

            <span className="block text-stone-600 text-xl my-4 select-none">+</span>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
                Contact Us
              </p>
              <p className="text-sm font-normal leading-[1.75] text-stone-400">
                We are thoughtful about the projects we take on so we can do
                justice to the work.{" "}
                <a
                  href="mailto:studio@pensieve.in"
                  className="underline underline-offset-2 hover:text-stone-100 transition-colors"
                >
                  studio@pensieve.in
                </a>
              </p>
            </div>

            <span className="block text-stone-600 text-xl mt-4 select-none">+</span>
          </div>

        </div>

        {/* ── Bottom: wordmark · copyright · nav + social + email ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Wordmark */}
          <div className="shrink-0">
            <p className="font-display text-2xl md:text-3xl font-medium tracking-[0.12em] uppercase leading-[1.15]">
              Studio<br />Pensieve
            </p>
          </div>

          {/* Copyright — centered on desktop */}
          <p className="text-[11px] text-stone-500 tracking-wide md:text-center md:self-end" suppressHydrationWarning>
            All rights reserved © {new Date().getFullYear()} Studio Pensieve
          </p>

          {/* Nav + social + email */}
          <div className="flex gap-14 md:gap-16 items-start shrink-0">

            {/* Page links */}
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-40 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-col gap-2.5">
              <a
                href="https://instagram.com/studiopensieve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-40 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-40 transition-opacity"
              >
                LinkedIn
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:studio@pensieve.in"
              className="text-[11px] font-semibold tracking-[0.18em] uppercase hover:opacity-40 transition-opacity"
            >
              studio@pensieve.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
