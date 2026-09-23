import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  href?: string;
};

export function ProjectCard({ project, href }: Props) {
  const content = (
    <>
      <div className="relative aspect-[4/3] bg-surface">
        <SiteImage
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-[4px] bg-accent/20 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-dark">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl text-primary">{project.title}</h3>
      </div>
    </>
  );

  if (href) {
    return (
      <article className="overflow-hidden rounded-lg bg-white shadow-sm">
        <Link href={href} className="block">
          {content}
        </Link>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      {content}
    </article>
  );
}
