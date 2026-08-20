"use client";

import { useEffect, useState } from "react";

const IMAGES = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--surface)",
      }}
    >
      {IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt="Gregorio Rahardjo"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.4rem",
        }}
      >
        {IMAGES.map((src, i) => (
          <span
            key={src}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: i === index ? "var(--brass)" : "rgba(240,236,226,0.35)",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
