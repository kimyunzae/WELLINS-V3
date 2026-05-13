import { ProjectDetail } from "@/components/project-detail";

export const metadata = {
  title: "Buford Projects | Wellins Inc.",
  description:
    "Industrial engineering projects and facility expansion efforts in Buford, Georgia.",
};


export default function BufordProjectsPage() {
  return (
    <ProjectDetail
      state="Buford"
      description="Buford anchors our manufacturing and regional fabrication footprint."
      projects={[
        {
          name: "Buford Manufacturing Hub",
          type: "Equipment Installation",
          location: "Buford, GA",
          year: "2026",
          description:
            "We are excited to announce our new manufacturing facility in Buford, GA. The 4.3-acre site is designed to expand production space for high-pressure piping, vessels, and specialized fabrication. This expansion allows us to customize solutions to complex mechanical needs while keeping project timelines responsive for partners across the Southeast.",
          image: "/images/banners/buford-facility.png",
        },

      ]}
    />
  );
}
