"use client";

export const FloralBadge = ({ children, variant = "gold" }: { children: React.ReactNode; variant?: "gold" | "violet" | "forest" }) => {
  const variants = {
    gold: "bg-gradient-to-br from-trini-gold/20 to-trini-gold/5 border-trini-gold/30",
    violet: "bg-gradient-to-br from-trini-violet/20 to-trini-violet/5 border-trini-violet/30",
    forest: "bg-gradient-to-br from-trini-forest/20 to-trini-forest/5 border-trini-forest/30",
  };

  return (
    <div className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full border ${variants[variant]} backdrop-blur-sm`}>
      <svg className="w-4 h-4 text-trini-orchid" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 2C8 2 6 4 6 6C6 8 8 10 8 10C8 10 10 8 10 6C10 4 8 2 8 2Z" opacity="0.6"/>
        <path d="M8 10C8 10 4 8 3 9C2 10 4 13 4 13C4 13 7 12 8 10Z" opacity="0.4"/>
        <path d="M8 10C8 10 12 8 13 9C14 10 12 13 12 13C12 13 9 12 8 10Z" opacity="0.4"/>
      </svg>
      <span className="text-sm font-display font-semibold">{children}</span>
    </div>
  );
};
