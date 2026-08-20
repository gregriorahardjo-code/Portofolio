"use client";

import { useMemo, useState } from "react";

const PROFILES = [
  { id: "exponential", label: "exponential" },
  { id: "cosine", label: "cosine-blend" },
  { id: "stepped", label: "stepped" },
];

const WIDTH = 640;
const HEIGHT = 220;
const Y0 = 70; // input-end half-height, px
const YF = 26; // output-end half-height, px
const N = 120; // sample points

function radiusAt(t, profile) {
  // t in [0, 1] along the horn length
  if (profile === "exponential") {
    const k = Math.log(Y0 / YF);
    return Y0 * Math.exp(-k * t);
  }
  if (profile === "cosine") {
    return YF + (Y0 - YF) * Math.pow(Math.cos((Math.PI / 2) * t), 2);
  }
  // stepped
  return t < 0.5 ? Y0 : YF;
}

function buildPath(profile) {
  const top = [];
  const bottom = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = t * WIDTH;
    const r = radiusAt(t, profile);
    top.push(`${x.toFixed(1)},${(HEIGHT / 2 - r).toFixed(1)}`);
    bottom.push(`${x.toFixed(1)},${(HEIGHT / 2 + r).toFixed(1)}`);
  }
  return `M ${top.join(" L ")} L ${bottom.reverse().join(" L ")} Z`;
}

export default function HornProfile() {
  const [profile, setProfile] = useState("exponential");
  const path = useMemo(() => buildPath(profile), [profile]);

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="100%"
        role="img"
        aria-label={`Cross-section of a ${profile} ultrasonic horn profile`}
      >
        <line
          x1="0"
          y1={HEIGHT / 2}
          x2={WIDTH}
          y2={HEIGHT / 2}
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d={path}
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.5"
          style={{ transition: "d 0.2s ease" }}
        />
        <circle r="4" fill="var(--wave)">
          <animateMotion dur="3.4s" repeatCount="indefinite" path={`M 0 ${HEIGHT / 2} L ${WIDTH} ${HEIGHT / 2}`} />
        </circle>
      </svg>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        {PROFILES.map((p) => (
          <button
            key={p.id}
            onClick={() => setProfile(p.id)}
            className="btn"
            style={{
              borderColor: profile === p.id ? "var(--brass)" : undefined,
              color: profile === p.id ? "var(--brass)" : undefined,
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
