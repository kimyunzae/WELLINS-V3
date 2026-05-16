import { HomePageSections } from "@/components/home/home-page-sections";
import { Navigation } from "@/components/nav-bar/navigation";

export const metadata = {
  title: "Wellins Inc. | Industrial Engineering Excellence",
  description:
    "Leading industrial engineering company specializing in piping, HVAC systems, equipment installation, and fire protection. Serving major manufacturers across the United States.",
};

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HomePageSections />
    </main>
  );
}
