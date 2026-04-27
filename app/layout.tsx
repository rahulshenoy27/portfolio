import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rahul Shenoy | Data Analyst",
    template: "%s | Rahul Shenoy"
  },
  description:
    "Portfolio website for Rahul Shenoy, a Data Analyst focused on dashboards, analytics, SQL, Python, Power BI, Tableau, and ETL pipelines.",
  keywords: ["Rahul Shenoy", "Data Analyst", "SQL", "Python", "Power BI", "Tableau", "ETL"],
  authors: [{ name: "Rahul Shenoy" }],
  openGraph: {
    title: "Rahul Shenoy | Data Analyst",
    description: "Turning data into actionable insights.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-surface antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
