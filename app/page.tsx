import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { FloralWatermark } from "@/components/floral/FloralWatermark";

export default function Home() {
  return (
    <main className="min-h-screen bg-trini-ivory">
      <Navigation />
      <div className="relative">
        <FloralWatermark />
        <HeroSection />
      </div>
      <FeaturesSection />
      <HowItWorks />
      <CommunitySection />
      <MembershipSection />
      <Footer />
    </main>
  );
}
