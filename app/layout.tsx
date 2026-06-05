import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Benjamin Ng — Software Engineer & Cybersecurity",
    template: "%s | Benjamin Ng",
  },
  description:
    "Portfolio of Benjamin Ng Yi Ting, a Singapore-based software engineering and cybersecurity professional focused on automation, DevSecOps, and security operations.",
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Benjamin Ng",
    "software engineer",
    "cybersecurity",
    "DevSecOps",
    "Splunk",
    "Tenable",
    "Singapore",
  ],
  openGraph: {
    title: "Benjamin Ng — Software Engineer & Cybersecurity",
    description:
      "Software engineering and cybersecurity portfolio covering automation, full-stack projects, and security operations.",
    type: "website",
    locale: "en_SG",
    siteName: "Benjamin Ng Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Benjamin Ng — Software Engineer & Cybersecurity",
    description:
      "Software engineering and cybersecurity portfolio covering automation, full-stack projects, and security operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
