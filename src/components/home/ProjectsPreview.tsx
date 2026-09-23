import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectsPreview() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Work from our sites"
            description="Photographs from DAC construction sites and completed buildings. No invented project names or clients."
          />
          <ButtonLink href="/projects" variant="secondary">
            All projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <FadeIn key={project.id}>
              <ProjectCard project={project} href="/projects" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
