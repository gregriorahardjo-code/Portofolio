export default function ExperienceCard({ role, org, location, date, bullets, href }) {
  const inner = (
    <div className="project-card" style={{ height: "100%" }}>
      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>{role}</h3>
      <p className="mono" style={{ color: "var(--brass)", fontSize: "13px", margin: "0 0 0.15rem" }}>
        {org}
      </p>
      <p className="mono muted" style={{ fontSize: "12px", margin: "0 0 1rem" }}>
        {location} · {date}
      </p>
      <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.55 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: "0.35rem" }}>
            {b}
          </li>
        ))}
      </ul>
      {href && (
        <p className="mono" style={{ fontSize: "12px", color: "var(--wave)", marginTop: "1rem", marginBottom: 0 }}>
          view project →
        </p>
      )}
    </div>
  );

  return href ? <a href={href}>{inner}</a> : inner;
}
