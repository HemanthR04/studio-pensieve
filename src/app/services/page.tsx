import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Studio Pensieve",
  description: "Interior design and architecture services by Studio Pensieve — thoughtful spaces built around how people live and work.",
};

const SERVICES = [
  {
    index: "01",
    title: "Interior Design",
    description:
      "From a single room to a complete home, restaurant, or workplace — we approach every interior with the same rigour. Understanding how people live and work, what they value, and how space can quietly support that life. We handle everything from concept through to construction, furniture selection, and final styling.",
    deliverables: ["Concept development", "Space planning", "Material & finish selection", "Furniture design & procurement", "Lighting design", "Construction documentation", "Site supervision", "Art & object curation"],
  },
  {
    index: "02",
    title: "Architecture",
    description:
      "New builds, extensions, and adaptive reuse. We approach architecture as a discipline of listening — to the land, the climate, and the brief. Our architectural work is rooted in place, shaped by material honesty, and designed to age with grace. We work across residential and mixed-use typologies.",
    deliverables: ["Site analysis & feasibility", "Concept design", "Schematic & design development", "Construction documentation", "Local authority approvals", "Contract administration", "Site oversight"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen">

        {/* ── Header ────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 pt-28 pb-24 md:pt-40 md:pb-36">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70 mb-8">What We Do</p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-3xl">
            A considered practice, built around how people inhabit space.
          </h1>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── Service list ──────────────────────────────────── */}
        {SERVICES.map((service, i) => (
          <div key={service.index}>
            <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

              {/* Label col */}
              <div className="md:col-span-3">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">{service.index}</p>
              </div>

              {/* Content col */}
              <div className="md:col-span-9 flex flex-col gap-6">
                <h2 className="font-display text-2xl md:text-3xl font-medium leading-snug">{service.title}</h2>
                <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-8 pt-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 text-sm text-foreground/55">
                      <span className="shrink-0 w-1 h-1 rounded-full bg-foreground/30 mt-[0.45em]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < SERVICES.length - 1 && <div className="border-t border-foreground/10" />}
          </div>
        ))}

        <div className="border-t border-foreground/10" />

        {/* ── CTA ───────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">Start a Project</p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Every engagement begins with a conversation. Tell us about your project — the space,
              the brief, the timeline — and we will be in touch within two working days.
            </p>
            <div>
              <a
                href="mailto:admin@studiopensieve.com"
                className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
              >
                <span className="h-px w-8 bg-foreground inline-block" />
                Begin a conversation
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
