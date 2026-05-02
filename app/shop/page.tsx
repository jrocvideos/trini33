import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { StoreGrid } from "@/components/shop/StoreGrid";

const mockStores = [
  { id: "1", name: "Fresh Fields Market", slug: "fresh-fields", description: "Local organic produce and artisan goods", city: "Toronto", is_local_partner: true, delivery_fee: 4.99, minimum_order: 25.00, logo_url: null },
  { id: "2", name: "Community Grocers", slug: "community-grocers", description: "Family-owned neighbourhood favourite", city: "Vancouver", is_local_partner: true, delivery_fee: 3.99, minimum_order: 20.00, logo_url: null },
  { id: "3", name: "Green Basket Co.", slug: "green-basket", description: "Sustainable and organic selections", city: "Montreal", is_local_partner: true, delivery_fee: 5.99, minimum_order: 30.00, logo_url: null },
  { id: "4", name: "Urban Harvest", slug: "urban-harvest", description: "Farm-to-table freshness daily", city: "Calgary", is_local_partner: false, delivery_fee: 4.49, minimum_order: 25.00, logo_url: null },
  { id: "5", name: "The Local Pantry", slug: "local-pantry", description: "Small-batch and locally sourced", city: "Halifax", is_local_partner: true, delivery_fee: 3.49, minimum_order: 15.00, logo_url: null },
  { id: "6", name: "Sunrise Foods", slug: "sunrise-foods", description: "Your everyday grocery needs", city: "Winnipeg", is_local_partner: false, delivery_fee: 4.99, minimum_order: 25.00, logo_url: null },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-trini-ivory">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-semibold text-trini-forest mb-4">Shop Local</h1>
            <p className="text-lg text-trini-charcoal/60 max-w-2xl mx-auto">Fresh from local partners and trusted grocers in your community.</p>
          </div>
          <StoreGrid stores={mockStores} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
