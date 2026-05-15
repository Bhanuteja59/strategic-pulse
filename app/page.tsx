import Hero from "@/components/sections/hero";
import VolunteerCarousel from "@/components/sections/volunteer-carousel";
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
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0b0f19] transition-colors duration-300">
      <Hero />
      <VolunteerCarousel />
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
