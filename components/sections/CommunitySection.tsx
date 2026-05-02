"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export const CommunitySection = () => (
  <section className="py-24 bg-trini-ivory">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trini-orchid/10 text-trini-violet text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" /> Community Basket
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-trini-forest mb-6">Help a family eat tonight</h2>
          <p className="text-lg text-trini-charcoal/70 leading-relaxed mb-8">
            Every time you checkout, you can add a small donation to our Community Basket.
            We partner with local food banks and charities to ensure no family in our neighbourhood goes hungry.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center"><div className="text-3xl font-display font-bold text-trini-forest">12K+</div><div className="text-sm text-trini-charcoal/60">Meals donated</div></div>
            <div className="text-center"><div className="text-3xl font-display font-bold text-trini-violet">$4.2K</div><div className="text-sm text-trini-charcoal/60">Raised this month</div></div>
            <div className="text-center"><div className="text-3xl font-display font-bold text-trini-gold">8</div><div className="text-sm text-trini-charcoal/60">Local partners</div></div>
          </div>
          <Link href="/community" className="btn-gold inline-flex items-center gap-2">
            <Heart className="w-5 h-5" /> Join the Movement
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-trini-orchid/20 to-trini-violet/10 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-trini-forest/10 flex items-center justify-center">
                <Heart className="w-12 h-12 text-trini-forest/40" />
              </div>
              <p className="text-trini-charcoal/50 font-display text-xl">Community Impact Visual</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-trini-gold/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);
