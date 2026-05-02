"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoConcept3 } from "@/components/floral/LogoConcepts";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/partners", label: "Local Partners" },
  { href: "/helper", label: "Become a Helper" },
  { href: "/circle", label: "Trini Circle" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community Basket" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-trini-ivory/90 backdrop-blur-md border-b border-trini-sage/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <LogoConcept3 className="w-32 h-10 group-hover:scale-105 transition-transform" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="font-display text-sm tracking-wide text-trini-charcoal/80 hover:text-trini-forest transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-trini-orchid group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-trini-charcoal/70 hover:text-trini-violet transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-trini-charcoal/70 hover:text-trini-violet transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-trini-orchid text-white text-[10px] rounded-full flex items-center justify-center">0</span>
            </button>
            <Link href="/shop" className="btn-primary text-sm py-2.5 px-6">Shop Now</Link>
          </div>

          <button className="lg:hidden p-2 text-trini-charcoal" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-trini-ivory border-t border-trini-sage/20">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="block font-display text-lg text-trini-charcoal hover:text-trini-forest transition-colors"
                onClick={() => setIsOpen(false)}>{link.label}</Link>
            ))}
            <div className="pt-4 border-t border-trini-sage/20">
              <Link href="/shop" className="btn-primary block text-center">Shop Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
