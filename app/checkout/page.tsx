import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-trini-ivory">
      <Navigation />
      <div className="pt-32 pb-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="font-display text-5xl font-semibold text-trini-forest mb-4 capitalize">checkout</h1>
          <p className="text-trini-charcoal/60">Coming soon. This page is under construction.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
