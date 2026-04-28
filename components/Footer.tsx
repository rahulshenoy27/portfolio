import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} Rahul Shenoy. Data Analyst portfolio.</p>
        <div className="flex gap-4">
          <Link href="mailto:rahulshenoy1999@gmail.com" className="transition hover:text-white">
            Email
          </Link>
          <Link href="https://www.linkedin.com/in/rahulshenoy27/" className="transition hover:text-white">
            LinkedIn
          </Link>
          <Link href="https://github.com/rahulshenoy27" className="transition hover:text-white">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
