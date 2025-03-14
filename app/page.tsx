import BGGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BGGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
      {/* <DemoSecton />
      <HowItWorksSection />
      <PricingSection />
      <CTASection /> */}
    </div>
  );
}
