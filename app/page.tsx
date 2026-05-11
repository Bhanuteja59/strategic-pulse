import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import DashboardPreview from "@/components/sections/dashboard-preview";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import Impact from "@/components/sections/impact";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIndicators />
      <About />
      <Services />
      <HowItWorks />
      <DashboardPreview />
      <Features />
      <Testimonials />
      <Impact />
      <FAQ />
      <CTA />
    </div>
  );
}
