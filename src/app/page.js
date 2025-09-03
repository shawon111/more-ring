import CostCalculator from "@/components/pages/home/CostCalculator";
import CtaSection from "@/components/pages/home/CtaSection";
import Faq from "@/components/pages/home/Faq";
import HomeHero from "@/components/pages/home/HomeHero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import Industries from "@/components/pages/home/Industries";
import Integrations from "@/components/pages/home/Integrations";
import PricingPlans from "@/components/pages/home/PricingPlans";
import WhyBeats from "@/components/pages/home/WhyBeats";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Industries />
      <CostCalculator />
      <HowItWorks />
      <Integrations />
      <WhyBeats />
      <PricingPlans />
      <Faq />
      <CtaSection />
    </div>
  );
}
