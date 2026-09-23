"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]["id"]>("all");

  const visible = useMemo(() => {
    if (filter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`inline-flex min-h-11 items-center rounded-[4px] px-4 text-sm font-semibold ${
                active
                  ? "bg-accent text-dark"
                  : "border-2 border-primary bg-transparent text-primary"
              }`}
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">
          No photographs in this category yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
