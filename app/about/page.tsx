import type { Metadata } from "next";
import { Database, GraduationCap, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Professional background and career focus for Rahul Shenoy, Data Analyst."
};

export default function AboutPage() {
  return (
    <div className="dashboard-grid">

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          {/* Left side - Text */}
          <div>
            <SectionHeader
              eyebrow="About"
              title="Analyst focused on clean data, clear metrics, and useful dashboards"
              description="I combine analytical thinking with practical engineering habits to create reporting workflows that people can trust and reuse."
            />
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/profile.jpg"
              alt="Rahul Shenoy"
              className="h-56 w-56 rounded-xl object-cover border border-line shadow-panel"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <AboutCard
            icon={GraduationCap}
            title="Background"
            body="MSc in Data Science with hands-on experience across statistics, business intelligence, data visualization, and applied analytics projects."
          />
          <AboutCard
            icon={Database}
            title="Experience"
            body="Comfortable working from raw datasets through SQL exploration, Python analysis, dashboard modeling, and stakeholder-ready reporting."
          />
          <AboutCard
            icon={Target}
            title="Career focus"
            body="Focused on data engineering and analytics roles where reliable pipelines, data quality, and decision-ready dashboards matter."
          />
        </div>

        <div className="mt-8 rounded-lg border border-line bg-panel p-6 shadow-panel">
          <h2 className="text-xl font-semibold text-white">Professional summary</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">
            I am a Data Analyst who enjoys turning messy datasets into structured insight. My work spans SQL analysis, Python workflows, BI dashboards, and ETL processes, with an emphasis on making data easier to understand, validate, and act on. I am especially interested in analytics engineering, dashboard automation, and data products that improve how teams make decisions.
          </p>
        </div>
      </section>
    </div>
  );
}

function AboutCard({
  icon: Icon,
  title,
  body
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-lg border border-line bg-panel p-6 shadow-panel">
      <div className="rounded-md border border-line bg-surface p-3 text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </article>
  );
}
