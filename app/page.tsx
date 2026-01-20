import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { FacilitySection } from "@/components/home/facility-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { ServicesSection } from "@/components/home/services-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FacilitySection />
      <ProjectsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
