import { notFound } from "next/navigation";

// Journal is disabled for now — page and nav links are commented out, not deleted.
export default function JournalPage() {
  notFound();
}

// import type { Metadata } from "next";
// import PageHeader from "@/components/PageHeader";
// import JournalWall from "@/components/JournalWall";
// import Footer from "@/components/Footer";
//
// export const metadata: Metadata = {
//   title: "Journal | Studio Pensieve",
//   description: "An infinite sketch wall — sketches, notebook pages, technical diagrams, and site photography from the studio's process.",
// };
//
// export default function JournalPage() {
//   return (
//     <>
//       <PageHeader transparent />
//       <JournalWall />
//       <Footer />
//     </>
//   );
// }
