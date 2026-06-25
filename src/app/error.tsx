"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-[#faf9f7] min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-8 md:px-16 py-40">
        <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/40 mb-8">Error</p>
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-xl mb-10">
          Something went wrong.
        </h1>
        <button
          onClick={reset}
          className="text-[11px] tracking-[0.25em] uppercase hover:opacity-40 transition-opacity inline-flex items-center gap-4"
        >
          <span className="h-px w-8 bg-foreground inline-block" />
          Try again
        </button>
      </div>
    </main>
  );
}
