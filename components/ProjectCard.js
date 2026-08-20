export default function ProjectCard({ title, summary, specs, href }) {
  const Card = (
    <div className="project-card">
      <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>{title}</h3>
      <p className="muted" style={{ margin: 0, fontSize: "0.95rem" }}>
        {summary}
      </p>
      {specs && specs.length > 0 && (
        <div className="specs">
          {specs.map((s) => (
            <span key={s.label}>
              {s.label} <b>{s.value}</b>
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return href ? <a href={href}>{Card}</a> : Card;
}
