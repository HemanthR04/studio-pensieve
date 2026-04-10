import Link from "next/link";
import Image from "next/image";

export default function StudioIntro() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-36 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start">

        {/* Text col */}
        <div className="md:col-span-6 flex flex-col gap-8">
          <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 font-bold">
            The Studio
          </p>

          <p className="font-display text-2xl md:text-3xl font-medium leading-[1.45] text-foreground max-w-lg">
            Design serves two deeply human purposes. It solves problems, and it elevates experience.
          </p>

          <p className="text-[15px] font-normal leading-[1.85] text-foreground/70 max-w-md">
            Founded in 2020 by Sanjan Hoode and Shashank Shetty, Studio Pensieve is a small,
            focused practice based in Bengaluru, working across residential, commercial, and
            hospitality projects throughout India. In five years, over 25 projects completed —
            each shaped by care for the people who will live and work in them.
          </p>

          <Link
            href="/about"
            className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
          >
            <span className="h-px w-8 bg-foreground inline-block" />
            Our Story
          </Link>
        </div>

        {/* Image col */}
        <div className="md:col-span-6 relative aspect-[4/3] overflow-hidden bg-stone-100">
          <Image
            src="/Team/Team.jpeg"
            alt="Sanjan Hoode and Shashank Shetty, founders of Studio Pensieve"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
