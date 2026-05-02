"use client";

export const PetalLoader = () => (
  <div className="relative w-16 h-16">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <div
        key={i}
        className="absolute top-1/2 left-1/2 w-3 h-6 bg-trini-orchid/60 rounded-full origin-bottom"
        style={{
          transform: `translate(-50%, -100%) rotate(${deg}deg)`,
          animation: `petalFloat 2s ease-in-out ${i * 0.15}s infinite`,
        }}
      />
    ))}
    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-trini-violet rounded-full -translate-x-1/2 -translate-y-1/2" />
  </div>
);
