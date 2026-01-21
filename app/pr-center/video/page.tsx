import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Play } from "lucide-react";

export const metadata = {
  title: "PR Video | Wellins Inc.",
  description:
    "Watch videos about Wellins Inc. projects, capabilities, and company culture.",
};

const videos = [
  {
    title: "Company Overview",
    description:
      "Learn about Wellins Inc., our history, capabilities, and commitment to industrial excellence.",
    duration: "4:32",
    thumbnail: "/images/hero-industrial.jpg",
  },
  {
    title: "Safety Program",
    description:
      "Our comprehensive safety program ensures every worker goes home safe every day.",
    duration: "3:15",
    thumbnail: "/images/service-equipment.jpg",
  },
  {
    title: "Industrial Piping Capabilities",
    description:
      "Explore our advanced piping fabrication and installation capabilities.",
    duration: "5:48",
    thumbnail: "/images/service-piping.jpg",
  },
  {
    title: "Project Spotlight: Alabama Automotive",
    description:
      "Behind the scenes of our largest automotive plant expansion project.",
    duration: "6:22",
    thumbnail: "/images/facility-expansion.jpg",
  },
  {
    title: "HVAC Solutions for Manufacturing",
    description:
      "How we design and install climate control systems for demanding industrial environments.",
    duration: "4:05",
    thumbnail: "/images/service-hvac.jpg",
  },
  {
    title: "Meet Our Team",
    description:
      "The skilled professionals behind every successful Wellins Inc. project.",
    duration: "3:45",
    thumbnail: "/images/team-workers.jpg",
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
          {/* Featured Video */}
          <div className="mb-16">
            <div className="relative aspect-video overflow-hidden bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${videos[0].thumbnail})` }}
              />
              <div className="absolute inset-0 bg-primary/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground">
                <button className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-foreground/50 transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10">
                  <Play className="h-8 w-8 fill-primary-foreground" />
                </button>
                <h2 className="mt-6 text-2xl font-semibold lg:text-3xl">
                  {videos[0].title}
                </h2>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  {videos[0].duration}
                </p>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.slice(1).map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/50 transition-colors group-hover:border-primary-foreground group-hover:bg-primary-foreground/10">
                      <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-primary/80 px-2 py-1 text-xs text-primary-foreground">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
