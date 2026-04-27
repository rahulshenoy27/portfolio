import Link from "next/link";
import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredStats, projects } from "@/lib/projects";

const skills = ["SQL", "Python", "Power BI", "Tableau", "ETL"];

export default function HomePage() {
  return (
    <div className="dashboard-grid">
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Data Analyst</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rahul Shenoy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Turning data into actionable insights
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            I build clean dashboards, reliable analysis workflows, and analytics-ready datasets that help teams move from raw data to focused decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-surface transition hover:bg-white"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-panel px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-panel-soft"
            >
              Download Resume
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid content-center gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {featuredStats.map((stat) => (
            <MetricCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/92">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="Analysis stack for insight delivery"
            description="A focused toolset for querying, transforming, modeling, visualizing, and explaining business data."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill} className="rounded-lg border border-line bg-panel p-5 text-center text-sm font-semibold text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Featured Work"
            title="Dashboard and pipeline case studies"
            description="Three representative projects covering BI reporting, analytical storytelling, and scalable data preparation."
          />
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white">
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-panel">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Available for analytics and data engineering roles"
            description="Open to conversations around dashboarding, reporting automation, data quality, and analytics workflows."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Email", "rahul.shenoy@example.com", "mailto:rahul.shenoy@example.com"],
              ["LinkedIn", "linkedin.com/in/rahulshenoy", "https://www.linkedin.com/"],
              ["GitHub", "github.com/rahulshenoy", "https://github.com/"]
            ].map(([label, value, href]) => (
              <Link key={label} href={href} className="rounded-lg border border-line bg-surface p-5 transition hover:border-accent hover:bg-panel-soft">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">{label}</p>
                <p className="mt-2 break-words text-sm text-muted">{value}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
