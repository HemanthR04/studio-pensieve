import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Studio Pensieve",
  description: "Get in touch with Studio Pensieve, Bangalore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen">

        {/* ── Header ────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 pt-28 pb-24 md:pt-40 md:pb-36">
          <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 mb-8">Get in Touch</p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-2xl">
            We are thoughtful about the projects we take on. Tell us about yours.
          </h1>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── Contact grid ──────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

          {/* Left: intro + email CTA */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              Every project begins with a conversation — and then another. Before a single
              line is drawn, we invest time in understanding the people we are designing for.
              Whether your brief is fully formed or still taking shape, we are happy to talk
              through the possibilities.
            </p>
            <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
              For new project enquiries, please share a brief description of the space, a
              rough timeline, and your location. We respond to all enquiries within two
              working days. For press and collaboration requests, use the same address and
              we will direct your message accordingly.
            </p>
            <div className="pt-4">
              <a
                href="mailto:admin@studiopensieve.com"
                className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
              >
                <span className="h-px w-8 bg-foreground inline-block" />
                admin@studiopensieve.com
              </a>
            </div>
          </div>

          {/* Right: details */}
          <div className="md:col-span-5 md:col-start-8 grid grid-cols-1 gap-10">
            {[
              {
                label: "Studio",
                lines: ["Studio Pensieve", "Bengaluru, India"],
              },
              {
                label: "New Project Enquiries",
                lines: ["admin@studiopensieve.com"],
              },
              {
                label: "Phone",
                lines: ["+91 90087 17518"],
              },
              {
                label: "Working Hours",
                lines: ["Monday – Friday", "9:30 am – 6:30 pm IST"],
              },
              {
                label: "Founded",
                lines: ["2020"],
              },
            ].map(({ label, lines }) => (
              <div key={label}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-3">{label}</p>
                {lines.map((line, i) => (
                  <p key={i} className="text-[15px] font-normal leading-[1.85] text-foreground/75">{line}</p>
                ))}
              </div>
            ))}

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-3">Social</p>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/studiopensieve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/studiopensieve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
