import BGGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/hwo-it-works";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BGGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
      </div>
      {/* <PricingSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}
