"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
  { href: "/projects", label: "~/projects" },
  { href: "/blog", label: "~/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(10,14,10,0.95)",
        backdropFilter: "blur(4px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Link href="/" style={{ color: "var(--green)", textDecoration: "none", fontWeight: "bold", fontSize: 14 }}>
          <span className="glow">benjamin@ng</span>
          <span style={{ color: "var(--text-muted)" }}>:~$</span>
        </Link>
        <div style={{ display: "flex", gap: 24 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13,
                textDecoration: "none",
                color: pathname === l.href ? "var(--green)" : "var(--text-muted)",
                borderBottom: pathname === l.href ? "1px solid var(--green)" : "1px solid transparent",
                paddingBottom: 2,
                transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
