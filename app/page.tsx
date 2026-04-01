import { HomePageSections } from "@/components/home/home-page-sections";
import { Navigation } from "@/components/nav-bar/navigation";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HomePageSections />
    </main>
  );
}
