"use client";

import { useEffect, useState } from "react";

const QUERY = "(max-width: 767px)";

// Always start `false` (matching the server-rendered value) so hydration
// isn't skipped for the DOM attributes it drives — e.g. <img src>, which
// React won't patch up on a hydration mismatch. The real value is applied
// in an effect after mount, which triggers a normal re-render instead.
export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
