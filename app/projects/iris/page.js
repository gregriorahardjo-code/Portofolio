import PdfEmbed from "../../../components/PdfEmbed";
import BackLink from "../../../components/BackLink";

export default function Iris() {
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
          Intelligent Real-Time Illumination System
        </h1>

        <div style={{ marginBottom: "2.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.6rem" }}>
            demo
          </p>
          <video
            controls
            width="100%"
            style={{
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
              background: "#000",
            }}
          >
            <source src="/Updated%20demo.mp4" type="video/mp4" />
          </video>
        </div>

        <PdfEmbed
          title="IRIS presentation — workshop slides"
          src="/Copy%20of%20IRIS%20Presentation%20Workshop%20Slides.pdf"
        />
      </div>
    </section>
  );
}
