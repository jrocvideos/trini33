"use client";

import Link from "next/link";
import { Check, Crown, Sparkles } from "lucide-react";

const tiers = [
  { name: "Free", price: "$0", period: "forever", description: "Perfect for occasional shoppers", features: ["Standard delivery fees", "Access to all stores", "Basic helper matching", "Community Basket donations"], cta: "Get Started", highlighted: false },
  { name: "Trini Circle", price: "$19", period: "/month", description: "For families who value care", features: ["Free delivery on orders $35+", "Priority helper booking", "Concierge support", "Partner discounts (up to 15%)", "Seasonal floral gift surprises", "Family account (up to 4 profiles)"], cta: "Join the Circle", highlighted: true },
];

export const MembershipSection = () => (
  <section className="py-24 bg-white/50">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trini-gold/10 text-trini-gold text-sm font-semibold mb-6">
          <Crown className="w-4 h-4" /> Membership
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-trini-forest mb-4">Join Trini Circle</h2>
        <p className="text-lg text-trini-charcoal/60 max-w-2xl mx-auto">Premium care for those who believe grocery delivery should feel special.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {tiers.map((tier) => (
          <div key={tier.name} className={`relative rounded-3xl p-8 ${tier.highlighted ? "bg-trini-forest text-trini-ivory shadow-2xl shadow-trini-forest/20 scale-105" : "bg-white border border-trini-sage/20"}`}>
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-trini-gold text-trini-charcoal px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Most Popular
                </div>
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-display text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className={tier.highlighted ? "text-trini-ivory/70" : "text-trini-charcoal/60"}>{tier.description}</p>
            </div>
            <div className="mb-8">
              <span className="font-display text-5xl font-bold">{tier.price}</span>
              <span className={tier.highlighted ? "text-trini-ivory/60" : "text-trini-charcoal/50"}>{tier.period}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 mt-0.5 ${tier.highlighted ? "text-trini-gold" : "text-trini-forest"}`} />
                  <span className={tier.highlighted ? "text-trini-ivory/90" : "text-trini-charcoal/80"}>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/circle" className={`block text-center py-4 rounded-full font-display text-lg transition-all ${tier.highlighted ? "bg-trini-gold text-trini-charcoal hover:bg-trini-gold/90" : "bg-trini-forest/10 text-trini-forest hover:bg-trini-forest/20"}`}>
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
