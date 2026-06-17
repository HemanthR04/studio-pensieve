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

        {/* ── Our Process ───────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70 mb-6">How We Work</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-5">Our process</h2>
          <p className="text-[15px] text-foreground/60 mb-20 max-w-xl leading-[1.75]">Every project follows a clear path, so you always know where we are and what comes next.</p>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Discovery & brief",
                description: "We start with a conversation. We listen to how you use your space, what you love, what isn't working, and what you're hoping for. This becomes the foundation for everything that follows.",
                tags: ["Project brief", "Site visit", "Budget framework"],
              },
              {
                num: "02",
                title: "Concept design",
                description: "We translate the brief into ideas, spatial layouts, mood references, material directions. This is where the design vision takes shape, and we work with you to refine it before moving further.",
                tags: ["Concept drawings", "Mood board", "3D sketches"],
              },
              {
                num: "03",
                title: "Design development",
                description: "Once the concept is approved, we develop it in detail, working through every element, resolving technical requirements, and coordinating with structural and MEP consultants as needed. We also produce 3D visualisations so you can see and experience the design before anything is built.",
                tags: ["Detailed drawings", "Material schedule", "Consultant coordination", "3D visualisation"],
              },
              {
                num: "04",
                title: "Documentation & approvals",
                description: "We prepare the full set of drawings and specifications needed for permits, approvals, and contractor tendering. Clear documentation means fewer surprises on site.",
                tags: ["Construction drawings", "BOQ support", "Permit submission"],
              },
              {
                num: "05",
                title: "Contractor tendering",
                description: "We help you identify and evaluate suitable contractors, sharing drawings, collecting quotes, and advising on selection.",
                tags: ["Tender package", "Quote comparison", "Contractor briefing"],
              },
              {
                num: "06",
                title: "Site oversight",
                description: "We make periodic site visits to review progress, answer contractor queries, and ensure the design intent is being followed. We flag issues early and keep you informed at every stage.",
                tags: ["Site visits", "Progress reviews", "Design clarifications"],
              },
              {
                num: "07",
                title: "Handover",
                description: "We walk through the completed project with you, address any snagging, and hand over all drawings and documentation.",
                tags: ["Final walkthrough", "As-built drawings", "Project archive"],
              },
            ].map(({ num, title, description, tags }) => (
              <div key={num} className="py-10 md:py-12 border-t border-foreground/10 grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-8 md:gap-12">
                <div className="pt-0.5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 text-[12px] tracking-wide text-foreground/45 tabular-nums">
                    {num}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[17px] font-medium leading-snug">{title}</h3>
                  <p className="text-[15px] leading-[1.85] text-foreground/65 max-w-2xl">{description}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] border border-foreground/20 rounded-full px-3 py-1 text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-foreground/10" />
          </div>

          <p className="text-[14px] text-foreground/50 leading-[1.8] pt-10 max-w-xl">
            Not every project uses all stages, we tailor our involvement to what you need.{" "}
            <a
              href="mailto:admin@studiopensieve.com"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Get in touch
            </a>{" "}
            and we&apos;ll talk through the right approach.
          </p>
        </div>

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
                className="text-[11px] font-semibold tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
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
