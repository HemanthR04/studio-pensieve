"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/components/Menu";

export default function PageHeader({ transparent = false }: { transparent?: boolean }) {
  const { openMenu } = useMenu();
  const pathname    = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] flex items-center justify-between px-8 md:px-14 h-14 transition-colors ${
        transparent ? "bg-transparent" : "bg-[#faf9f7]/90 backdrop-blur-sm border-b border-foreground/[0.06]"
      }`}
    >
      <Link
        href="/"
        className="font-display text-sm font-light tracking-[0.18em] uppercase"
      >
        Studio Pensieve
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Projects", href: "/projects" },
          { label: "Services", href: "/services" },
          { label: "Journal",  href: "/journal" },
          { label: "About",    href: "/about" },
        ].map(({ label, href }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
          <Link
            key={label}
            href={href}
            className={`text-[11px] tracking-[0.2em] uppercase transition-colors ${
              isActive ? "text-foreground" : "text-foreground/45 hover:text-foreground"
            }`}
          >
            {label}
          </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="/contact"
          className="text-[11px] tracking-[0.2em] uppercase text-foreground/55 hover:text-foreground transition-colors hidden md:flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/70" />
          Contact
        </Link>
        <button
          onClick={openMenu}
          className="md:hidden text-[11px] tracking-[0.2em] uppercase text-foreground/55 hover:text-foreground transition-colors"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
