import { Footer } from "@/components/footer";
import { CTASection } from "@/components/home/cta-section";
// import { FacilitySection } from "@/components/home/facility-section";
import { HeroSection } from "@/components/home/hero-section";
// import { ProjectsSection } from "@/components/home/projects-section";
import { ProjectsShowcaseSlider } from "@/components/home/projects-showcase-slider";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { Navigation } from "@/components/nav-bar/navigation";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProjectsShowcaseSlider />
      {/* <FacilitySection /> */}
      {/* <ProjectsSection /> */}
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
