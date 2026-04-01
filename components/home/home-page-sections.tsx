"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsShowcaseSlider } from "@/components/home/projects-showcase-slider";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { HOME_PAGE_REPLAY_EVENT } from "@/lib/home-hero-replay";

export function HomePageSections() {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const replaySections = () => {
      setReplayKey((current) => current + 1);
    };

    window.addEventListener(HOME_PAGE_REPLAY_EVENT, replaySections);

    return () => {
      window.removeEventListener(HOME_PAGE_REPLAY_EVENT, replaySections);
    };
  }, []);

  return (
    <div key={replayKey}>
      <HeroSection />
      <StatsSection />
      <ProjectsShowcaseSlider />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
