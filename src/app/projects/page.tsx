import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects | Studio Pensieve",
  description: "All projects by Studio Pensieve — residential, commercial, and hospitality interiors across India.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen">

        <ProjectsPageClient />

      </main>
      <Footer />
    </>
  );
}
