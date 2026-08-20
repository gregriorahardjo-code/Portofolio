export default function Contact() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: "60ch" }}>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
          reach out
        </p>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.75rem" }}>Contact</h1>
        <p className="muted" style={{ marginBottom: "2rem" }}>
          The easiest ways to reach me are email or LinkedIn.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="mailto:rahardjo_1207@tamu.edu" className="btn primary">
            rahardjo_1207@tamu.edu
          </a>
          <a href="https://www.linkedin.com/in/gregorio-rahardjo" className="btn">
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
