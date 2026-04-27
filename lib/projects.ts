import { BarChart3, Database, GitBranch, LineChart, PieChart, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  metric: string;
  icon: LucideIcon;
  problem: string;
  dataset: string;
  approach: string[];
  tools: string[];
  insights: string[];
  outcome: string;
  visual: {
    label: string;
    values: number[];
    captions: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "ipl-analytics-dashboard",
    title: "IPL Analytics Dashboard",
    description:
      "Interactive cricket analytics dashboard for team, player, venue, and season performance trends.",
    stack: ["Power BI", "SQL", "DAX", "Data Modeling"],
    metric: "12 seasons",
    icon: BarChart3,
    problem:
      "IPL performance data is rich but fragmented across seasons, teams, venues, and player roles. The goal was to make it easy to compare performance drivers and spot tactical patterns.",
    dataset:
      "Ball-by-ball and match-level IPL data with batting, bowling, venue, toss, innings, and match outcome attributes.",
    approach: [
      "Cleaned inconsistent team and venue naming across seasons.",
      "Built a star schema with match, player, team, venue, and innings dimensions.",
      "Created DAX measures for run rate, strike rate, economy, wickets, boundary percentage, and win contribution.",
      "Designed drill-down pages for team summaries, player profiles, and venue trends."
    ],
    tools: ["Power BI", "SQL", "DAX", "Power Query"],
    insights: [
      "Venue conditions created measurable scoring pattern shifts between first and second innings.",
      "Boundary percentage and middle-over economy were stronger win indicators than total wickets alone.",
      "Several teams showed toss-dependent strategy changes across seasons."
    ],
    outcome:
      "Delivered a self-service dashboard that reduced manual season comparisons and made team/player performance analysis faster for non-technical users.",
    visual: {
      label: "Win Rate by Phase",
      values: [62, 48, 71, 56, 68],
      captions: ["Powerplay", "Middle", "Death", "Chase", "Defend"]
    }
  },
  {
    slug: "sales-data-analysis-dashboard",
    title: "Sales Data Analysis Dashboard",
    description:
      "Executive sales dashboard tracking revenue, margin, category trends, and regional performance.",
    stack: ["Tableau", "SQL", "Excel", "KPI Design"],
    metric: "18% margin lift",
    icon: LineChart,
    problem:
      "Sales leaders needed one reliable view of revenue health, product performance, and regional contribution without relying on scattered spreadsheets.",
    dataset:
      "Transactional sales records with product category, customer segment, region, order date, discount, revenue, cost, and profit fields.",
    approach: [
      "Standardized date, category, and region dimensions for consistent filtering.",
      "Designed KPI logic for revenue, gross margin, average order value, discount leakage, and repeat purchase rate.",
      "Segmented customers and products to compare growth, profitability, and sales concentration.",
      "Built dashboard views for executive summary, regional analysis, and product/category drilldowns."
    ],
    tools: ["Tableau", "SQL", "Excel", "Calculated Fields"],
    insights: [
      "Discount-heavy categories were driving revenue growth while eroding gross margin.",
      "Two regions outperformed revenue targets but lagged in repeat purchase rate.",
      "A small set of high-margin products accounted for a disproportionate share of profit."
    ],
    outcome:
      "Created a decision-ready dashboard that helped prioritize profitable categories, improve discount governance, and focus regional follow-up.",
    visual: {
      label: "Quarterly Revenue Index",
      values: [42, 58, 52, 76, 81],
      captions: ["Q1", "Q2", "Q3", "Q4", "Next"]
    }
  },
  {
    slug: "etl-pipeline-using-pyspark",
    title: "ETL Pipeline using PySpark",
    description:
      "Scalable data pipeline that ingests, transforms, validates, and prepares analytics-ready datasets.",
    stack: ["PySpark", "Python", "ETL", "Data Quality"],
    metric: "3x faster",
    icon: Workflow,
    problem:
      "Manual data preparation was slowing reporting cycles and creating quality issues before downstream analysis.",
    dataset:
      "Raw event and transaction extracts with nested fields, late-arriving records, duplicates, and mixed date formats.",
    approach: [
      "Created a layered ingestion flow for raw, cleaned, and curated datasets.",
      "Used PySpark transformations for schema normalization, deduplication, enrichment, and aggregation.",
      "Added validation checks for null rates, duplicate keys, date ranges, and record-count variance.",
      "Prepared partitioned outputs for downstream dashboards and analytics workloads."
    ],
    tools: ["PySpark", "Python", "SQL", "Parquet", "Data Validation"],
    insights: [
      "Most reporting defects came from duplicate source events and inconsistent timestamp parsing.",
      "Partitioning by date and business domain significantly improved query performance.",
      "Automated quality checks caught upstream issues before dashboard refreshes."
    ],
    outcome:
      "Improved pipeline reliability, reduced manual transformation time, and created cleaner datasets for analytics and reporting.",
    visual: {
      label: "Pipeline Stage Throughput",
      values: [36, 54, 69, 84, 91],
      captions: ["Raw", "Clean", "Join", "Validate", "Curate"]
    }
  }
];

export const featuredStats = [
  { label: "Core Tools", value: "5+", icon: Database },
  { label: "Dashboard Projects", value: "3", icon: PieChart },
  { label: "Analytics Focus", value: "BI + ETL", icon: GitBranch }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
