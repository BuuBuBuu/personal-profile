import Navbar from "@/components/Navbar";
import TerminalWindow from "@/components/TerminalWindow";
import { profile, experience, education, certifications, skills } from "@/lib/data";

const typeColors: Record<string, string> = {
  security: "var(--yellow)",
  engineering: "var(--cyan)",
  ops: "var(--green-dim)",
};

const typeLabels: Record<string, string> = {
  security: "security",
  engineering: "engineering",
  ops: "operations",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 4 }}>
          <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ cat about.md
        </p>
        <h1 className="glow" style={{ fontSize: 28, fontWeight: "bold", color: "var(--green)", margin: "0 0 8px" }}>
          About
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 48 }}>
          📍 {profile.location}
        </p>

        {/* Summary */}
        <section style={{ marginBottom: 56 }}>
          <TerminalWindow title="summary.txt">
            <p style={{ color: "var(--text)", lineHeight: 1.8, fontSize: 14, margin: 0 }}>
              {profile.summary}
            </p>
          </TerminalWindow>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: 56 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>
            <span style={{ color: "var(--green)" }}>$</span> cat experience.log
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {experience.map((job, i) => (
              <div
                key={i}
                className="terminal-window card-hover"
                style={{ padding: "20px 24px", borderLeft: `3px solid ${typeColors[job.type]}` }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: "var(--text)", fontWeight: "bold", fontSize: 14 }}>{job.role}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      border: `1px solid ${typeColors[job.type]}`,
                      color: typeColors[job.type],
                      borderRadius: 2,
                    }}
                  >
                    {typeLabels[job.type]}
                  </span>
                </div>
                <div style={{ color: "var(--cyan)", fontSize: 13, marginBottom: 4 }}>{job.company}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 14 }}>{job.period}</div>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ color: "var(--text)", fontSize: 13, lineHeight: 1.7, display: "flex", gap: 8, marginBottom: 4 }}>
                      <span style={{ color: "var(--green)", flexShrink: 0 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: 56 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>
            <span style={{ color: "var(--green)" }}>$</span> cat skills.txt
          </p>
          <div className="terminal-window" style={{ padding: "24px" }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: 18 }}>
                <div style={{ color: "var(--cyan)", fontSize: 12, marginBottom: 8 }}># {category}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: 56 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>
            <span style={{ color: "var(--green)" }}>$</span> cat education.txt
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {education.map((edu, i) => (
              <div key={i} className="terminal-window" style={{ padding: "16px 20px" }}>
                <div style={{ color: "var(--text)", fontSize: 14 }}>{edu.school}</div>
                <div style={{ color: "var(--cyan)", fontSize: 13, margin: "4px 0" }}>{edu.degree}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{edu.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certs */}
        <section>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>
            <span style={{ color: "var(--green)" }}>$</span> ls certs/
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {certifications.map((c) => (
              <div
                key={c.name}
                style={{
                  padding: "12px 18px",
                  border: `1px solid ${c.color === "yellow" ? "rgba(255,255,0,0.3)" : "rgba(0,255,255,0.3)"}`,
                  borderRadius: 2,
                  background: c.color === "yellow" ? "rgba(255,255,0,0.04)" : "rgba(0,255,255,0.04)",
                }}
              >
                <div style={{ color: c.color === "yellow" ? "var(--yellow)" : "var(--cyan)", fontSize: 14 }}>{c.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 4 }}>{c.date}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
