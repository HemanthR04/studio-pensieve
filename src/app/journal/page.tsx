import type { Metadata } from "next";
import JournalCanvas from "@/components/JournalCanvas";

export const metadata: Metadata = {
  title: "Journal | Studio Pensieve",
  description: "A visual journal of spaces, materials, and moments.",
};

export default function JournalPage() {
  return <JournalCanvas />;
}
