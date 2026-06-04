import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benjamin Ng — Software Engineer & Cybersecurity",
  description: "Portfolio of Benjamin Ng Yi Ting — Software Engineer and Cybersecurity professional based in Singapore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
