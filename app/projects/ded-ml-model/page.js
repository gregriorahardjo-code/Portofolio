import PdfEmbed from "../../../components/PdfEmbed";
import BackLink from "../../../components/BackLink";

export default function DedMlModel() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: "820px" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <BackLink />
        </div>
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
          project
        </p>
        <h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>
          Additive Manufacturing Machine Learning Model
        </h1>

        <PdfEmbed title="NSF Challenge" src="/NSF%20Challenge.pdf" />
        <PdfEmbed title="Technical report" src="/Gregorio_Report.pdf" />
      </div>
    </section>
  );
}
