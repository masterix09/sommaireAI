import BGGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BGGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
      <DemoSection />
      {/* <HowItWorksSection />
      <PricingSection />
      <CTASection /> */}
    </div>
  );
}
