import Link from "next/link";
import { projectsData } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-pastel-purple hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectPageClient project={project} />;
}
