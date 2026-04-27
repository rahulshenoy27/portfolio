import Link from "next/link";
import { BarChart2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="rounded-md border border-line bg-panel p-2 text-accent">
            <BarChart2 className="h-5 w-5" aria-hidden="true" />
          </span>
          Rahul Shenoy
        </Link>
        <div className="flex items-center gap-1 rounded-lg border border-line bg-panel p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-xs font-medium text-muted transition hover:bg-panel-soft hover:text-white sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
