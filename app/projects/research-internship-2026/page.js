import PdfEmbed from "../../../components/PdfEmbed";
import BackLink from "../../../components/BackLink";

export default function ResearchInternship2026() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: "820px" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <BackLink />
        </div>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
          project
        </p>
        <h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Research Internship 2026</h1>

        <PdfEmbed title="Poster 2026" src="/Poster%202026.pdf" />
        <PdfEmbed title="Summer 2026 report" src="/Summer%202026.pdf" />
      </div>
    </section>
  );
}
