import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChartPlaceholder } from "@/components/ChartPlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { getProject, projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="dashboard-grid">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Case Study" title={project.title} description={project.description} />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md border border-line bg-panel px-3 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ChartPlaceholder {...project.visual} />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <CaseStudyBlock title="Problem statement" body={project.problem} />
          <CaseStudyBlock title="Dataset description" body={project.dataset} />
          <CaseStudyList title="Approach / methodology" items={project.approach} />
          <CaseStudyList title="Tools used" items={project.tools} />
          <CaseStudyList title="Key insights" items={project.insights} />
          <CaseStudyBlock title="Outcome / impact" body={project.outcome} />
        </div>
      </section>
    </div>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-lg border border-line bg-panel p-6 shadow-panel">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </section>
  );
}

function CaseStudyList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-line bg-panel p-6 shadow-panel">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
