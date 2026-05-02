"use client";

export const FloralWatermark = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] ${className}`}>
    <svg className="absolute -right-20 -top-20 w-96 h-96 animate-petal-spin" viewBox="0 0 200 200">
      <path d="M100 20 Q130 50 120 90 Q110 70 100 60 Q90 70 80 90 Q70 50 100 20Z" fill="#6E4A8E" />
      <path d="M100 60 Q120 80 115 110 Q105 95 100 85 Q95 95 85 110 Q80 80 100 60Z" fill="#D6A4C9" />
      <path d="M100 85 Q115 100 110 125 Q105 110 100 100 Q95 110 90 125 Q85 100 100 85Z" fill="#1E4D3A" />
    </svg>
  </div>
);
