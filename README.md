# Rahul Shenoy Portfolio

A modern personal portfolio website for a Data Analyst, built with Next.js App Router and Tailwind CSS. The design uses a dark, dashboard-inspired interface with reusable components, responsive layouts, project cards, and dynamic case-study pages.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Folder Structure

```text
app/
  about/page.tsx              About page
  projects/page.tsx           Projects listing page
  projects/[slug]/page.tsx    Dynamic project case-study route
  globals.css                 Global Tailwind styles
  layout.tsx                  Root layout and SEO metadata
  page.tsx                    Homepage
components/
  ChartPlaceholder.tsx        Reusable project visual placeholder
  Footer.tsx                  Site footer
  MetricCard.tsx              Dashboard metric card
  Navbar.tsx                  Top navigation
  ProjectCard.tsx             Reusable project card
  SectionHeader.tsx           Shared section heading
lib/
  projects.ts                 Project data and helper functions
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build for production:

```bash
npm run build
```

## Customization Notes

- Update contact links in `app/page.tsx` and `components/Footer.tsx`.
- Add a real resume at `public/resume.pdf` to enable the Download Resume button.
- Add or edit projects in `lib/projects.ts`; dynamic case-study pages are generated from that data.
