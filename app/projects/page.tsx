import Navbar from "@/components/Navbar";
import { projects } from "@/lib/data";

const typeColors: Record<string, string> = {
  engineering: "var(--cyan)",
  ml: "var(--yellow)",
  security: "var(--green)",
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 4 }}>
          <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ ls projects/
        </p>
        <h1 className="glow" style={{ fontSize: 28, fontWeight: "bold", color: "var(--green)", margin: "0 0 8px" }}>
          Projects
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 48 }}>
          Things I&apos;ve built.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="terminal-window card-hover"
              style={{ padding: "20px 24px", borderTop: `2px solid ${typeColors[p.type] ?? "var(--border)"}` }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, gap: 8 }}>
                <h2 style={{ color: "var(--text)", fontSize: 15, fontWeight: "bold", margin: 0 }}>{p.title}</h2>
                <span
                  style={{
                    fontSize: 10,
                    padding: "2px 6px",
                    border: `1px solid ${typeColors[p.type] ?? "var(--border)"}`,
                    color: typeColors[p.type] ?? "var(--text-muted)",
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {p.type}
                </span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7, margin: "0 0 16px" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future CTF writeups */}
        <div style={{ marginTop: 48 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16 }}>
            <span style={{ color: "var(--green)" }}>$</span> ls ctf/
          </p>
          <div
            className="terminal-window"
            style={{ padding: "32px 24px", textAlign: "center", borderStyle: "dashed" }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
              CTF and security notes coming soon.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
