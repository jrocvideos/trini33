"use client";

export const LogoConcept1 = ({ className = "w-32 h-32" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E4D3A" />
        <stop offset="50%" stopColor="#6E4A8E" />
        <stop offset="100%" stopColor="#D6A4C9" />
      </linearGradient>
    </defs>
    <path d="M35 25 Q60 20 85 25 Q80 30 60 28 Q45 27 40 35 Q38 50 42 70 Q45 85 55 95 Q60 100 58 105 Q55 100 50 90 Q40 70 38 50 Q37 40 38 35 Q35 30 35 25Z" fill="url(#logo1Grad)" />
    <path d="M25 32 Q60 22 95 32 Q90 38 60 34 Q35 32 25 32Z" fill="#1E4D3A" opacity="0.9" />
    <path d="M42 45 Q55 42 65 50 Q60 58 48 55 Q42 52 42 45Z" fill="#B8C4B1" opacity="0.8" />
    <circle cx="58" cy="102" r="3" fill="#6E4A8E" />
  </svg>
);

export const LogoConcept2 = ({ className = "w-32 h-32" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E4D3A" />
        <stop offset="100%" stopColor="#6E4A8E" />
      </linearGradient>
    </defs>
    <path d="M60 8 C75 8, 88 15, 95 28 C105 28, 112 38, 112 52 C112 65, 105 75, 95 78 C90 92, 78 100, 60 100 C42 100, 30 92, 25 78 C15 75, 8 65, 8 52 C8 38, 15 28, 25 28 C32 15, 45 8, 60 8Z" fill="none" stroke="url(#crestGrad)" strokeWidth="2.5" />
    <path d="M60 20 Q75 25 80 40 Q75 35 60 32 Q45 35 40 40 Q45 25 60 20Z" fill="#D6A4C9" opacity="0.4" />
    <path d="M60 32 Q70 38 72 50 Q65 45 60 42 Q55 45 48 50 Q50 38 60 32Z" fill="#6E4A8E" opacity="0.3" />
    <text x="60" y="72" textAnchor="middle" fontFamily="serif" fontSize="28" fontWeight="600" fill="#1E4D3A">T<tspan fontSize="20" dy="-4">33</tspan></text>
    <line x1="45" y1="80" x2="75" y2="80" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LogoConcept3 = ({ className = "w-40 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wordGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E4D3A" />
        <stop offset="100%" stopColor="#2A2A2A" />
      </linearGradient>
    </defs>
    <text x="10" y="45" fontFamily="var(--font-cormorant), serif" fontSize="42" fontWeight="600" fill="url(#wordGrad)">T</text>
    <text x="38" y="45" fontFamily="var(--font-cormorant), serif" fontSize="42" fontWeight="400" fill="url(#wordGrad)">R</text>
    <line x1="68" y1="18" x2="68" y2="45" stroke="#1E4D3A" strokeWidth="3" strokeLinecap="round" />
    <text x="78" y="45" fontFamily="var(--font-cormorant), serif" fontSize="42" fontWeight="400" fill="url(#wordGrad)">N</text>
    <line x1="108" y1="18" x2="108" y2="45" stroke="#1E4D3A" strokeWidth="3" strokeLinecap="round" />
    <circle cx="108" cy="12" r="5" fill="#6E4A8E" opacity="0.9" />
    <circle cx="108" cy="12" r="8" fill="none" stroke="#D6A4C9" strokeWidth="1" opacity="0.5" />
    <text x="122" y="45" fontFamily="var(--font-cormorant), serif" fontSize="42" fontWeight="300" fill="#6E4A8E">33</text>
    <line x1="10" y1="52" x2="165" y2="52" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const AppIcon = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="20" fill="#1E4D3A" />
    <path d="M40 15 Q55 20 58 35 Q55 30 40 28 Q25 30 22 35 Q25 20 40 15Z" fill="#6E4A8E" opacity="0.3" />
    <path d="M40 28 Q50 33 52 45 Q45 40 40 38 Q35 40 28 45 Q30 33 40 28Z" fill="#D6A4C9" opacity="0.25" />
    <text x="40" y="55" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="600" fill="#F7F3EA">T</text>
    <circle cx="58" cy="22" r="3" fill="#C9A227" />
  </svg>
);
