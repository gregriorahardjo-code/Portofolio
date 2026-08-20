import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Research Internship 2026",
    summary:
      "Summer research internship — findings poster and full summer report.",
    href: "/projects/research-internship-2026",
    specs: [{ label: "includes", value: "poster + report" }],
  },
  {
    title: "Intelligent Real-Time Illumination System",
    summary:
      "IRIS — presentation slides and a video demo of the system in action.",
    href: "/projects/iris",
    specs: [{ label: "includes", value: "slides + demo video" }],
  },
  {
    title: "Additive Manufacturing Machine Learning Model",
    summary:
      "NSF FMRG Data Challenge — probabilistic ML pipeline for laser track geometry prediction in directed energy deposition.",
    href: "/projects/ded-ml-model",
    specs: [{ label: "includes", value: "report" }],
  },
];

export default function Projects() {
  return (
    <section>
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
          archive
        </p>
        <h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Projects</h1>
        <div className="grid-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
