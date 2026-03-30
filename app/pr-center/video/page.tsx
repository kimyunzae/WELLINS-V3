import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import VideoGallery, { type VideoItem } from "./video-gallery";

export const metadata = {
  title: "PR Video | Wellins Inc.",
  description:
    "Watch videos about Wellins Inc. projects, capabilities, and company culture.",
};

const videos: VideoItem[] = [
  {
    title: "Company Overview",
    description:
      "Learn about Wellins Inc., our history, capabilities, and commitment to industrial excellence.",
    duration: "4:32",
    thumbnail: "/images/hero-industrial.jpg",
    youtubeId: "",
  },
  {
    title: "Safety Program",
    description:
      "Our comprehensive safety program ensures every worker goes home safe every day.",
    duration: "3:15",
    thumbnail: "/images/service-equipment.jpg",
    youtubeId: "",
  },
  {
    title: "Industrial Piping Capabilities",
    description:
      "Explore our advanced piping fabrication and installation capabilities.",
    duration: "5:48",
    thumbnail: "/images/service-piping.jpg",
    youtubeId: "",
  },
  {
    title: "Project Spotlight: Alabama Automotive",
    description:
      "Behind the scenes of our largest automotive plant expansion project.",
    duration: "6:22",
    thumbnail: "/images/facility-expansion.jpg",
    youtubeId: "",
  },
  {
    title: "HVAC Solutions for Manufacturing",
    description:
      "How we design and install climate control systems for demanding industrial environments.",
    duration: "4:05",
    thumbnail: "/images/service-hvac.jpg",
    youtubeId: "",
  },
  {
    title: "Meet Our Team",
    description:
      "The skilled professionals behind every successful Wellins Inc. project.",
    duration: "3:45",
    thumbnail: "/images/team-workers.jpg",
    youtubeId: "",
  },
];

export default function VideoPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="PR Center"
        title="Video Gallery"
        description="See our work in action through project videos and company features"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <VideoGallery videos={videos} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
