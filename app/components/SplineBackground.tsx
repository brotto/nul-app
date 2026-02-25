"use client";

import dynamic from "next/dynamic";

const FluidCanvas = dynamic(() => import("./FluidCanvas"), { ssr: false });

export function SplineBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <FluidCanvas />
      {/* Gradient fade at bottom to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0E] to-transparent" />
    </div>
  );
}
