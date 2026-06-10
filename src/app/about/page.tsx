import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Studio Pensieve",
  description: "Studio Pensieve is a Bengaluru-based interior design practice founded by Sanjan Hoode and Shashank Shetty.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen">

        {/* ── Hero statement ─────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 pt-28 pb-24 md:pt-40 md:pb-36">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70 mb-8">About the Studio</p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-3xl">
            Design serves two deeply human purposes. It solves problems, and it elevates experience.
          </h1>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── Studio story ──────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">The Studio</p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Studio Pensieve was founded in 2020 by two architects whose relationship long predates their
              practice. Childhood friends before becoming colleagues, Sanjan Hoode and Shashank Shetty
              studied architecture at separate universities, bound by a shared conviction that they would
              one day build something together. Studio Pensieve is the realisation of that intent.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Based in Bengaluru, the studio is a focused practice working across residential, commercial,
              hospitality, and interior projects nationwide. In five years, it has completed over 25
              projects, each shaped by a consistent belief: design serves two deeply human purposes. It
              solves problems, and it elevates experience.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Good design makes everyday life easier and more meaningful while creating beauty that
              inspires aspiration. It has long been treated as a luxury; at Studio Pensieve, the intent
              is to make it less so.
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── How We Work ───────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">How We Work</p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Every project begins with a conversation, and then another. Before a single line is drawn,
              we invest time in understanding you: how you move through a day, what you value, what you
              resist, and what you have always quietly imagined.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              This early phase is deliberate and attentive, allowing the design to emerge with clarity
              rather than being imposed. Once that understanding is established, the site takes over.
              Context, climate, orientation, and constraints become active participants in the process.
              Our role is to locate the intersection between your needs and the site&apos;s character,
              and to build in a way that honours both.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              At its best, the process is a shared one, shaped by conversation, openness, and a growing
              sense of direction. Whether you arrive with a clear vision or just an instinct for what
              feels right, we work with you to give it form.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Along the way, you&apos;ll find us patient and accommodating. We see that not just as a
              way of working, but as a responsibility we carry into every project.
            </p>
          </div>
        </div>

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

        {/* ── Founders ──────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">The Founders</p>
          </div>
          <div className="md:col-span-9 flex flex-col gap-14">
            {/* Team photo */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
              <Image
                src="/Team/Team.jpeg"
                alt="Sanjan Hoode and Shashank Shetty, Co-founders of Studio Pensieve"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>

            {/* Founder bios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {[
                {
                  name: "Sanjan Hoode",
                  role: "Co-founder & Principal Architect",
                  qualification: "B.Arch, RV School of Architecture",
                  bio: "He was drawn to the discipline for its ability to translate ideas into environments that shape how people live and connect. At the studio, he leads design while also overseeing business and operations, ensuring the work remains both considered and grounded in function.",
                },
                {
                  name: "Shashank Shetty",
                  role: "Co-founder & Principal Architect",
                  qualification: "B.Arch, BMS School of Architecture",
                  bio: "His approach sits at the intersection of rigour and imagination, where problem-solving becomes a creative act. At the studio, he leads design direction and the team, shaping both the work and the culture of the practice.",
                },
              ].map(({ name, role, qualification, bio }) => (
                <div key={name} className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-medium leading-snug">{name}</p>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-foreground/40 mt-1">{role}</p>
                    <p className="text-[11px] text-foreground/35 mt-1">{qualification}</p>
                  </div>
                  <p className="text-[15px] font-normal leading-[1.85] text-foreground/75">{bio}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[15px] font-normal leading-[1.85] text-foreground/75 max-w-2xl">
                Though their journeys into architecture were distinct, their design sensibilities have
                grown closely aligned over time. Their approaches may differ, but the work speaks in
                one voice: considered, contextual, and quietly intentional.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── What we are looking for ───────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">What We Are Looking For</p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              We&apos;re thoughtful about the projects we take on so we can give each one the attention
              it deserves. The work is strongest when there is a genuine investment in the space and an
              openness to the process.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              For us, quality is not defined by finishes or budgets alone, but by the care carried
              through every stage, from the first conversation to the final site visit.
            </p>
            <div className="pt-4">
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
