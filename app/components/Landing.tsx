"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion";
import confetti from "canvas-confetti";

const IMAGES = [
  "/img/green-bend.jpg",
  "/img/old-stand.jpg",
  "/img/two-stand.jpg",
  "/img/black-lamp.jpg",
  "/img/three-sit.jpg",
  "/img/green-face.jpg",
  "/img/orange-hand.jpg",
  "/img/me-small.png",
];

export default function Landing() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Trigger confetti on mount
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Balloons animation - slow-moving, large particles
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 90,
        origin: { y: 1 },
        gravity: 0.3,
        scalar: 1.8,
        shapes: ["square"],
        colors: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4d96ff", "#ff9ff3"],
      });
    }, 300);

    // Additional confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5, x: 0.2 },
      });
    }, 600);

    // Final balloon burst from right side
    setTimeout(() => {
      confetti({
        particleCount: 25,
        spread: 80,
        origin: { y: 1, x: 0.8 },
        gravity: 0.25,
        scalar: 1.6,
        shapes: ["square"],
        colors: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4d96ff", "#ff9ff3"],
      });
    }, 900);

    // Stagger animation for container
    if (containerRef.current) {
      animate(containerRef.current, { opacity: [0, 1] }, { duration: 0.8 });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-black text-zinc-50 flex flex-col items-center justify-start py-12 px-4"
    >
      {/* Section 1: Happy Birthday Greeting */}
      <section className="w-full max-w-2xl py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Happy Birthday, Ma{" "}
          <span className="text-4xl md:text-5xl">🎉🎂✨</span>
        </h1>
        <p className="mt-6 text-xl text-zinc-300">
          Celebrating you today and always! 🎈💝🌟
        </p>
      </section>

      {/* Section 2: Single Image in Frame */}
      <section className="w-full max-w-2xl py-16">
        <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-zinc-700 shadow-2xl bg-zinc-900">
          <img
            src="/img/me-small.png"
            alt="Birthday celebration"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-zinc-400 mt-4 text-sm">
          This was enhanced, because the main image is heavily damaged 😭
        </p>
      </section>

      {/* Section 3: Infinite Scrolling Marquee */}
      <section className="w-full py-16 overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8"></h2>
        <div className="relative w-full">
          <div className="marquee-container flex gap-3 sm:gap-4 md:gap-6 animate-marquee">
            {/* Original set */}
            {IMAGES.map((idx) => (
              <div
                key={`original-${idx}`}
                className="flex-shrink-0 w-40 h-32 sm:w-48 sm:h-40 md:w-64 md:h-48 rounded-xl overflow-hidden border-2 border-zinc-700 bg-zinc-900 shadow-lg"
              >
                <img
                  src={`${idx}`}
                  alt={`Memory ${idx}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://via.placeholder.com/400x300?text=Image+${idx}`;
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {IMAGES.map((idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex-shrink-0 w-40 h-32 sm:w-48 sm:h-40 md:w-64 md:h-48 rounded-xl overflow-hidden border-2 border-zinc-700 bg-zinc-900 shadow-lg"
              >
                <img
                  src={`${idx}`}
                  alt={`Memory ${idx}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://via.placeholder.com/400x300?text=Image+${idx}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <p className="text-center text-zinc-400 mt-6 text-sm">
          Add your favorite images and links to the marquee!
        </p> */}
      </section>

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
}
