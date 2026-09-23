import type { Metadata } from "next";
import { pageMeta } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Projects",
  description: pageMeta.projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="Site and building photographs from Deneke Abebe Construction. Titles describe the images; they are not named client projects."
        image={company.images.hero}
      />
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
