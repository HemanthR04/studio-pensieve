import Link from "next/link";
import Hero from "@/components/Hero";
import StudioIntro from "@/components/StudioIntro";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const STATS = [
  { value: "25+",       label: "Projects Completed" },
  { value: "5",         label: "Years in Practice"  },
  { value: "Bengaluru", label: "Based In"            },
];

const SERVICES = [
  {
    index: "01",
    title: "Interior Design",
    desc:  "Homes, workplaces, and hospitality spaces designed around the people who inhabit them — unhurried, personal, and built to last.",
  },
  {
    index: "02",
    title: "Architecture",
    desc:  "New builds and adaptive reuse rooted in place, shaped by material honesty, and designed to age with grace.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* ── Selected Work ──────────────────────────────── */}
        <div className="px-8 md:px-16 pb-6">
          <div className="mx-auto max-w-7xl flex items-baseline justify-between border-t border-foreground/10 pt-6">
            <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 font-bold">
              Selected Work
            </p>
            <Link
              href="/projects"
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>

        <Portfolio limit={5} />

        {/* ── View all CTA ───────────────────────────────── */}
        <div className="px-8 md:px-16 py-14 border-t border-foreground/10">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/70">
              Showing 5 of {projects.length} projects
            </p>
            <Link
              href="/projects"
              className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
            >
              <span className="h-px w-8 bg-foreground inline-block" />
              View All Projects
            </Link>
          </div>
        </div>

        {/* ── Stats bar ──────────────────────────────────── */}
        <div className="px-8 md:px-16 py-16 md:py-20 border-t border-foreground/10">
          <div className="mx-auto max-w-7xl grid grid-cols-3 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl md:text-4xl font-medium mb-1">{value}</p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/40">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Studio intro ───────────────────────────────── */}
        <StudioIntro />

        {/* ── Services ───────────────────────────────────── */}
        <section className="px-8 md:px-16 py-24 md:py-36 border-t border-foreground/10">
          <div className="mx-auto max-w-7xl">

            <div className="flex items-baseline justify-between mb-14">
              <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 font-bold">
                Services
              </p>
              <Link
                href="/services"
                className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground transition-colors"
              >
                Full Overview
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
              {SERVICES.map(({ index, title, desc }) => (
                <div key={title} className="bg-[#faf9f7] p-8 md:p-10 flex flex-col gap-5">
                  <span className="text-[11px] tracking-[0.2em] text-foreground/30">{index}</span>
                  <h3 className="font-display text-xl font-medium">{title}</h3>
                  <p className="text-[14px] leading-[1.8] text-foreground/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ────────────────────────────────── */}
        <section className="px-8 md:px-16 py-28 md:py-40 border-t border-foreground/10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 font-bold mb-6">
                Start a Project
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] max-w-2xl">
                Have a space in mind? Let&apos;s talk.
              </h2>
            </div>
            <div className="md:col-span-4 flex items-end">
              <Link
                href="/contact"
                className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
              >
                <span className="h-px w-8 bg-foreground inline-block" />
                Begin a Conversation
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
