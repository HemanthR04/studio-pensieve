import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const ogImage = project.cover ?? project.hero ?? "/og-default.jpg";
  return {
    title: `${project.title} | Studio Pensieve`,
    description: `${project.category} project by Studio Pensieve — ${project.location}, ${project.year}.`,
    openGraph: {
      title: `${project.title} | Studio Pensieve`,
      description: `${project.category} project by Studio Pensieve — ${project.location}, ${project.year}.`,
      images: [{ url: ogImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectPageClient project={project} />;
}
