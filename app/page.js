import ImageCarousel from "../components/ImageCarousel";
import ExperienceCard from "../components/ExperienceCard";
import PdfEmbed from "../components/PdfEmbed";

const technicalSkills = [
  "Mechanical Design",
  "SolidWorks",
  "ANSYS",
  "Python",
  "MATLAB",
  "Autodesk Fusion",
  "MS Excel",
  "MS Word",
];

const manufacturingSkills = [
  "Lean Manufacturing",
  "GD&T",
  "DFM",
  "Root Cause Analysis",
  "Hand Layup",
  "Sintering",
  "3D Printing",
  "Laser Cutting",
];

const clubs = [
  "ASME",
  "SME",
  "Aggie Habitat for Humanity",
  "Corps Basketball Team",
  "FOCUS",
  "PERMIAS (Treasurer)",
];

const experience = [
  {
    role: "Undergraduate Researcher",
    org: "Texas A&M ACTOR Lab",
    location: "College Station, TX",
    date: "January 2025 – Present",
    bullets: [
      "Research CFRP epoxy and vinyl-ester composites in artificial seawater; communicate updates through faculty meetings",
      "Reduce costs by $700+ by using hand-layup fabrication instead of procurement, also allowing custom fiber orientation",
      "Produce 100+ high-quality samples by fabricating carbon fiber plates designed for CNC machining per ASTM standards",
      "Refine sample drying and tensile testing methods, reducing the standard deviation of weight and stiffness data by 10%",
      "Evaluate material degradation threshold and moisture uptake by weekly profilometry, guiding future improvements",
    ],
  },
  {
    role: "Research Intern",
    org: "Oak Ridge National Laboratory",
    location: "Oak Ridge, TN",
    date: "May 2026 – July 2026",
    bullets: [
      "Designed and validated a Ti64 amplifying horn for ultrasonic fatigue tests, achieving 99.3% of the theoretical max gain",
      "Performed FEA calculations (modal, harmonic, and stress) in ANSYS, attaining 95% similarity with experimental results",
      "Documented a 7-page experimental procedure and data log to standardize workflow and support reproducibility",
      "Characterized phase transformation in Ti-Nb-Ta-Zr-TiH2, Ti-Nb-Ta-Zr alloys up to 1200°C via neutron diffraction analysis",
      "Identified that TiH2 accelerates atom diffusion by 15% and improves densification, optimizing sintering processes",
    ],
  },
  {
    role: "Research Intern",
    org: "Argonne National Laboratory",
    location: "Lemont, IL",
    date: "July 2026",
    bullets: [
      "Analyzed grain strain and growth of Ti-Nb-Ta-Zr-TiH2, Ti-Nb-Ta-Zr alloys up to 1200°C via synchrotron diffraction analysis",
      "Discovered that TiH2 expedites grain merging and alloys self-heal after cooling, informing heat-treatment parameters",
    ],
  },
  {
    role: "Manufacturing Engineering Intern",
    org: "Astra Honda Motor",
    location: "Jakarta, IDN",
    date: "May 2025 – August 2025",
    bullets: [
      "Saved $16,000 annually by identifying the root cause of air waste across machines, recommending valve installations",
      "Standardized sharpening procedure by proposing procurement of drill sharpening jig to enable predictive maintenance",
      "Decreased machine noise levels by 10% by installing noise dampeners with maintenance team to ensure hearing safety",
      "Redesigned jig pin in SolidWorks from round to diamond, leveraging operator input to optimize production efficiency",
    ],
  },
];

const projects = [
  {
    role: "Intelligent Real-Time Illumination System",
    org: "Aggies Create Incubator",
    location: "College Station, TX",
    date: "January 2026 – Present",
    href: "/projects/iris",
    bullets: [
      "Won 1st place out of 10 teams and $500 by pitching the idea of a smart lighting system for surgeons in front of investors",
      "Apply GD&T and DFM principles to design robotic arm joints and linkages in SolidWorks, manufacture by 3D printing",
    ],
  },
  {
    role: "Additive Manufacturing Researcher",
    org: "NSF-Future Manufacturing Data Challenge",
    location: "College Station, TX",
    date: "July 2026",
    href: "/projects/ded-ml-model",
    bullets: [
      "Developed a probabilistic ML model that predicts the width of DED laser tracks in real-time with a 90% confidence level",
    ],
  },
];

const leadership = [
  {
    role: "Cadet",
    org: "Corps of Cadets",
    location: "College Station, TX",
    date: "August 2024 – Present",
    bullets: [
      "Dedicate 35+ hours a week following a rigorous Corps program, being full-time cadet and student, enhancing discipline",
      "Plan and lead outfit athletic training sessions for 70+ cadets twice a week, placing 2nd overall in corps intramurals",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section>
        <div className="wrap grid-2" style={{ alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "2.6rem", marginBottom: "0.6rem" }}>Gregorio Rahardjo</h1>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
              U.S. Citizen
            </p>
            <p className="muted" style={{ maxWidth: "40ch", marginBottom: "1.75rem" }}>
              Mechanical Engineering student at Texas A&amp;M University.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="/projects" className="btn primary">
                view projects
              </a>
              <a href="/contact" className="btn">
                get in touch
              </a>
            </div>
          </div>
          <ImageCarousel />
        </div>
      </section>

      <hr className="hairline" />

      <section className="tight">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            skills
          </p>
          <div className="grid-2" style={{ gap: "2rem" }}>
            <div>
              <p className="mono muted" style={{ fontSize: "12px", marginBottom: "0.6rem" }}>
                technical
              </p>
              <p style={{ margin: 0, lineHeight: 1.8 }}>{technicalSkills.join(" · ")}</p>
            </div>
            <div>
              <p className="mono muted" style={{ fontSize: "12px", marginBottom: "0.6rem" }}>
                manufacturing
              </p>
              <p style={{ margin: 0, lineHeight: 1.8 }}>{manufacturingSkills.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="tight">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            clubs &amp; involvement
          </p>
          <p style={{ margin: 0, lineHeight: 1.8 }}>{clubs.join(" · ")}</p>
        </div>
      </section>

      <hr className="hairline" />

      <section>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
            work history
          </p>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>Experience</h2>
          <div className="grid-2">
            {experience.map((e) => (
              <ExperienceCard key={e.role + e.org} {...e} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
            selected work
          </p>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>Projects</h2>
          <div className="grid-2">
            {projects.map((p) => (
              <ExperienceCard key={p.role} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
            outside the lab
          </p>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>Leadership &amp; Involvement</h2>
          <div className="grid-2">
            {leadership.map((l) => (
              <ExperienceCard key={l.role} {...l} />
            ))}
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="tight">
        <div className="wrap">
          <PdfEmbed title="Unofficial transcript" src="/Unofficial%20Transcript.pdf" />
        </div>
      </section>
    </>
  );
}
