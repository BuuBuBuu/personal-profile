interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title = "terminal", children }: Props) {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 8, fontSize: 11, color: "var(--text-muted)" }}>{title}</span>
      </div>
      <div style={{ padding: "20px 24px" }}>{children}</div>
    </div>
  );
}
