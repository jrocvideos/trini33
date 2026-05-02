"use client";

import Link from "next/link";
import { LogoConcept3 } from "@/components/floral/LogoConcepts";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Trini", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Partner with Us", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Twitter", href: "#", icon: Twitter },
  ],
};

export const Footer = () => (
  <footer className="bg-trini-forest text-trini-ivory">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <LogoConcept3 className="w-40 h-12 mb-6" />
          <p className="font-display text-2xl mb-4">Delivered with care.</p>
          <p className="text-trini-ivory/70 max-w-sm leading-relaxed">
            Fresh food, trusted helpers, and local connection—right to your door.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-trini-gold">Company</h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-trini-ivory/70 hover:text-trini-orchid transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-trini-gold">Legal</h4>
          <ul className="space-y-3">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-trini-ivory/70 hover:text-trini-orchid transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-trini-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-trini-ivory/50 text-sm">© 2026 Trini33. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {footerLinks.social.map((link) => (
            <a key={link.label} href={link.href}
              className="w-10 h-10 rounded-full bg-trini-ivory/10 flex items-center justify-center hover:bg-trini-orchid/30 transition-colors">
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
