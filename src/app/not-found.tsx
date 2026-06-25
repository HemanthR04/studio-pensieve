import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen flex items-center">
        <div className="mx-auto max-w-6xl px-8 md:px-16 py-40">
          <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 mb-8">404</p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-xl mb-10">
            This page doesn&apos;t exist.
          </h1>
          <Link
            href="/"
            className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
          >
            <span className="h-px w-8 bg-foreground inline-block" />
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
