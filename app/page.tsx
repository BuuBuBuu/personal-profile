import Link from "next/link";
import Navbar from "@/components/Navbar";
import { profile, skills, certifications } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        {/* Hero */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 8 }}>
            <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ whoami
          </p>
          <h1
            className="glow cursor-blink"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "bold", color: "var(--green)", margin: "0 0 12px" }}
          >
            {profile.name}
          </h1>
          <p style={{ fontSize: 16, color: "var(--cyan)", marginBottom: 20 }}>{profile.title}</p>
          <p style={{ color: "var(--text)", lineHeight: 1.7, maxWidth: 640, fontSize: 14 }}>{profile.summary}</p>
          <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
            {[
              { href: profile.github, label: "[ GitHub ]", border: "var(--green-dark)", color: "var(--green)", bg: "rgba(0,255,65,0.04)" },
              { href: profile.linkedin, label: "[ LinkedIn ]", border: "rgba(0,255,255,0.3)", color: "var(--cyan)", bg: "rgba(0,255,255,0.04)" },
              { href: `mailto:${profile.email}`, label: "[ Email ]", border: "var(--border)", color: "var(--text-muted)", bg: "transparent" },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  padding: "8px 18px",
                  border: `1px solid ${btn.border}`,
                  color: btn.color,
                  textDecoration: "none",
                  fontSize: 13,
                  borderRadius: 2,
                  background: btn.bg,
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </section>

        {/* Quick nav */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16 }}>
            <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ ls -la
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { href: "/about", label: "about/", desc: "Background, experience, education" },
              { href: "/projects", label: "projects/", desc: "Code I've shipped" },
              { href: "/blog", label: "blog/", desc: "Writeups and notes" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="terminal-window card-hover"
                style={{ textDecoration: "none", display: "block", padding: "20px" }}
              >
                <div style={{ color: "var(--green)", fontSize: 14, marginBottom: 6 }}>{item.label}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills snapshot */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16 }}>
            <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ cat skills.txt
          </p>
          <div className="terminal-window" style={{ padding: "24px" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: 14 }}>
                <span style={{ color: "var(--cyan)", fontSize: 12, marginRight: 12 }}>{category}:</span>
                <span style={{ color: "var(--text)", fontSize: 12 }}>{items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certs */}
        <section>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16 }}>
            <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ ls certs/
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {certifications.map((c) => (
              <div
                key={c.name}
                style={{
                  padding: "10px 16px",
                  border: `1px solid ${c.color === "yellow" ? "rgba(255,255,0,0.3)" : "rgba(0,255,255,0.3)"}`,
                  borderRadius: 2,
                  background: c.color === "yellow" ? "rgba(255,255,0,0.04)" : "rgba(0,255,255,0.04)",
                }}
              >
                <div style={{ color: c.color === "yellow" ? "var(--yellow)" : "var(--cyan)", fontSize: 13 }}>
                  {c.name}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}>{c.date}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
