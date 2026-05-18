import { HomePageSections } from "@/components/home/home-page-sections";
import { Navigation } from "@/components/nav-bar/navigation";
import { createPageMetadata, siteDescription, siteTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteTitle,
  description: siteDescription,
});

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HomePageSections />
    </main>
  );
}
