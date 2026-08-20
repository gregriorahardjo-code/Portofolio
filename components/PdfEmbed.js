export default function PdfEmbed({ title, src }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      {title && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "0.6rem",
          }}
        >
          <p className="eyebrow" style={{ margin: 0 }}>
            {title}
          </p>
          <a href={src} download className="mono" style={{ fontSize: "12px", color: "var(--muted)" }}>
            download ↓
          </a>
        </div>
      )}
      <iframe
        src={src}
        title={title || "PDF preview"}
        width="100%"
        height="700"
        style={{
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          background: "var(--surface)",
        }}
      />
    </div>
  );
}
