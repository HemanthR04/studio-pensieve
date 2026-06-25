"use client";

import { useState } from "react";

function getIsTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function useIsTouchDevice(): boolean {
  const [isTouch] = useState(getIsTouchDevice);
  return isTouch;
}
