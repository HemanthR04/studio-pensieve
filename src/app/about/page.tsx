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
              Studio Pensieve was founded in 2020 by two architects who have known each other far longer
              than they have practised together. Childhood friends before becoming colleagues, Sanjan Hoode
              and Shashank Shetty studied architecture at separate universities, carrying a shared conviction
              that one day they would build something together. That something became Studio Pensieve.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Based in Bengaluru, the studio is a small, focused practice working across residential,
              commercial, hospitality, and interior projects across the country. In five years, the studio
              has completed over 25 projects, each shaped by a consistent belief: good design makes everyday
              life easier, more meaningful, and more humane, while also creating beauty that inspires
              aspiration. It has long been treated as a luxury. At Studio Pensieve, the intent is to make
              it less so.
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
              Every project begins with a conversation — and then another. Before a single line is drawn,
              we invest time in understanding the people we are designing for: how they move through a day,
              what they value, what they resist, and what they have always quietly imagined. The early
              process is unhurried and genuinely curious. This allows the design to feel accurate rather
              than imposed.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Once that understanding is established, the site takes over. Context, climate, orientation,
              and constraints become active participants in the design. Our role is to find where the
              client&apos;s needs and the site&apos;s character intersect, and to build something that
              honours both.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              We work best with clients who are either clear about what they want or open enough to
              discover it with us. When the process is understood and respected, the collaboration becomes
              stronger, and the work benefits from it. We are often described as patient and accommodating.
              We take that as both a compliment and a responsibility.
            </p>
          </div>
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
                  bio: "He was drawn to architecture for its rare ability to translate ideas into environments that shape how people live and connect. At the studio, he leads design while also overseeing business and operations, ensuring the work remains both thoughtful and functional.",
                },
                {
                  name: "Shashank Shetty",
                  role: "Co-founder & Principal Architect",
                  qualification: "B.Arch, BMS School of Architecture",
                  bio: "His approach lies at the intersection of rigour and imagination, where problem-solving becomes a creative process. At the studio, he leads design direction and the team, shaping both the work and the culture of the practice.",
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
                grown closely aligned. Their approaches may differ, but the work speaks in one voice —
                considered, contextual, and human.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── What we are looking for ───────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">What We Look For</p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              We are thoughtful about the projects we take on so we can do justice to the work. We work
              best with clients who care about their spaces and engage with the process.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              For us, quality is not defined by finishes or budgets alone, but by the care in the
              process — from the first conversation to the final site visit.
            </p>
            <div className="pt-4">
              <a
                href="mailto:studio@pensieve.in"
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
