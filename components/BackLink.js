import Link from "next/link";

export default function BackLink() {
  return (
    <Link href="/projects" className="mono" style={{ fontSize: "13px", color: "var(--muted)" }}>
      ← back to projects
    </Link>
  );
}
