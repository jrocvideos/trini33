"use client";

const steps = [
  { number: "01", title: "Choose your store", description: "Browse local partners or your favourite grocery chains." },
  { number: "02", title: "Set your preferences", description: "Tell us how you like your produce. We'll remember." },
  { number: "03", title: "Meet your helper", description: "A trusted Trini Helper shops carefully and chats if needed." },
  { number: "04", title: "Delivered with care", description: "Fresh groceries arrive at your door. Community included." },
];

export const HowItWorks = () => (
  <section className="py-24 bg-trini-forest text-trini-ivory relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="floralPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#F7F3EA" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#floralPattern)" />
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">How Trini works</h2>
        <p className="text-trini-ivory/70 text-lg">Simple, thoughtful, and built around you.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            <div className="text-6xl font-display font-bold text-trini-gold/20 mb-4">{step.number}</div>
            <h3 className="font-display text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-trini-ivory/70 leading-relaxed">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-trini-gold/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
