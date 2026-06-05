import Navbar from "@/components/Navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 4 }}>
          <span style={{ color: "var(--green)" }}>benjamin@ng</span>:~$ ls blog/
        </p>
        <h1 className="glow" style={{ fontSize: 28, fontWeight: "bold", color: "var(--green)", margin: "0 0 8px" }}>
          Blog
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 48 }}>
          Writeups, notes, and things I&apos;m learning.
        </p>

        {/* Empty state */}
        <div
          className="terminal-window"
          style={{ padding: "48px 32px", textAlign: "center" }}
        >
          <p style={{ color: "var(--green)", fontSize: 13, marginBottom: 8 }}>
            $ find . -name &quot;*.md&quot; -type f
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
            No published notes yet.
          </p>
        </div>

        {/* Suggested categories */}
        <div style={{ marginTop: 40 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 16 }}># Planned topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Splunk queries",
              "Vulnerability assessments",
              "CTF writeups",
              "Python automation",
              "DevSecOps",
              "Home lab notes",
            ].map((topic) => (
              <span key={topic} className="tag-cyan" style={{ padding: "4px 12px", fontSize: 12 }}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
