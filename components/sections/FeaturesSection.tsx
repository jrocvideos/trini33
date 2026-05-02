"use client";

import { ShoppingBasket, MessageCircle, Heart, Users, Gift, Crown } from "lucide-react";

const features = [
  { icon: ShoppingBasket, title: "Smart Shopping", description: "Browse local stores, save favorites, and reorder your weekly basket with one tap.", color: "bg-trini-forest/10 text-trini-forest" },
  { icon: MessageCircle, title: "Live Helper Chat", description: "Chat directly with your helper. 'Bananas ripe now or later?' You decide.", color: "bg-trini-violet/10 text-trini-violet" },
  { icon: Heart, title: "Care Preferences", description: "Organic first, budget smart, or premium only. Your preferences, every time.", color: "bg-trini-orchid/10 text-trini-orchid" },
  { icon: Users, title: "Family Delivery", description: "Send groceries to parents, seniors, or friends. Include a heartfelt note.", color: "bg-trini-gold/10 text-trini-gold" },
  { icon: Gift, title: "Community Basket", description: "Add a donation at checkout. Help a family eat tonight.", color: "bg-trini-sage/20 text-trini-forest" },
  { icon: Crown, title: "Trini Circle", description: "Free delivery, concierge support, and seasonal floral surprises.", color: "bg-trini-gold/10 text-trini-gold" },
];

export const FeaturesSection = () => (
  <section className="py-24 bg-white/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-trini-forest mb-4">Built with intention</h2>
        <p className="text-lg text-trini-charcoal/60 max-w-2xl mx-auto">Every feature designed to bring care back to grocery delivery.</p>
        <div className="floral-divider max-w-xs mx-auto mt-8" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="card-premium p-8 group hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-trini-charcoal mb-3">{feature.title}</h3>
            <p className="text-trini-charcoal/60 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
