import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-panel p-5 shadow-panel transition hover:-translate-y-1 hover:border-accent/60 hover:bg-panel-soft">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-md border border-line bg-surface p-3 text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="rounded-md border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          {project.metric}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:text-white"
      >
        View case study
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
