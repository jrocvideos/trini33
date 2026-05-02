"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FloralBadge } from "@/components/floral/FloralBadge";

export const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-trini-sage/10 via-transparent to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FloralBadge variant="violet">Now serving your neighbourhood</FloralBadge>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-[1.1] text-trini-forest">
            Groceries,{" "}
            <span className="relative">
              delivered
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4" stroke="#D6A4C9" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            with care.
          </h1>
          <p className="text-xl text-trini-charcoal/70 max-w-lg leading-relaxed">
            Fresh food, trusted helpers, and local connection—right to your door.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/helper"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-trini-forest text-trini-forest font-display text-lg hover:bg-trini-forest hover:text-trini-ivory transition-all duration-300">
              Become a Helper
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-trini-sage to-trini-forest border-2 border-trini-ivory flex items-center justify-center text-xs text-white font-bold">
                  {String.fromCharCode(64+i)}
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-trini-charcoal">2,000+ happy families</p>
              <p className="text-sm text-trini-charcoal/60">in your community</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-trini-forest/10">
            <div className="aspect-[4/3] bg-gradient-to-br from-trini-sage/30 to-trini-orchid/20 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-trini-forest/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-trini-forest/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-trini-charcoal/50 font-display text-lg">Hero Image Placeholder</p>
                <p className="text-trini-charcoal/40 text-sm mt-2">Warm family kitchen scene with fresh produce</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-trini-sage/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-trini-forest/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-trini-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-trini-charcoal text-sm">Order confirmed</p>
                  <p className="text-xs text-trini-charcoal/60">Sarah is shopping now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-trini-orchid/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 right-12 w-32 h-32 bg-trini-violet/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);
