"use client";

import Link from "next/link";
import { MapPin, Star, Truck } from "lucide-react";

interface Store {
  id: string; name: string; slug: string; description: string | null;
  city: string | null; is_local_partner: boolean; delivery_fee: number;
  minimum_order: number; logo_url: string | null;
}

export const StoreGrid = ({ stores }: { stores: Store[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {stores.map((store) => (
      <Link key={store.id} href={`/shop/${store.slug}`} className="group card-premium overflow-hidden">
        <div className="h-40 bg-gradient-to-br from-trini-sage/30 to-trini-orchid/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-trini-forest/10 flex items-center justify-center">
              <span className="font-display text-2xl text-trini-forest/40">{store.name[0]}</span>
            </div>
          </div>
          {store.is_local_partner && (
            <div className="absolute top-4 left-4 bg-trini-gold text-trini-charcoal px-3 py-1 rounded-full text-xs font-semibold">Local Partner</div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-xl font-semibold text-trini-charcoal group-hover:text-trini-forest transition-colors">{store.name}</h3>
            <div className="flex items-center gap-1 text-trini-gold">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">4.8</span>
            </div>
          </div>
          <p className="text-trini-charcoal/60 text-sm mb-4 line-clamp-2">{store.description || 'Fresh groceries delivered with care'}</p>
          <div className="flex items-center gap-4 text-sm text-trini-charcoal/50">
            <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{store.city}</span></div>
            <div className="flex items-center gap-1"><Truck className="w-4 h-4" /><span>${store.delivery_fee} delivery</span></div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
