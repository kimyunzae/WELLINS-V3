import { ProjectDetail } from "@/components/project-detail"

export const metadata = {
  title: "Georgia Projects | Wellins Inc.",
  description: "Industrial engineering projects in Georgia including food processing, distribution, and manufacturing facilities.",
}

export default function GeorgiaProjectsPage() {
  return (
    <ProjectDetail
      state="Georgia"
      description="Our Atlanta regional office serves Georgia's diverse industrial base, from food processing to logistics and advanced manufacturing."
      stats={[
        { label: "Projects Completed", value: "45+" },
        { label: "Years Active", value: "18" },
        { label: "Major Clients", value: "15+" },
        { label: "Team Members", value: "20+" },
      ]}
      projects={[
        {
          name: "Atlanta Food Processing Center",
          type: "HVAC System",
          location: "Atlanta, GA",
          year: "2024",
          description: "Complete refrigeration and HVAC installation for a 180,000 sq ft food processing facility, including temperature-controlled zones and sanitary piping systems.",
          image: "/images/project-2.jpg",
        },
        {
          name: "Savannah Distribution Hub",
          type: "Fire Protection",
          location: "Savannah, GA",
          year: "2023",
          description: "ESFR sprinkler system installation for a 500,000 sq ft distribution center near the Port of Savannah, designed for high-rack storage configuration.",
          image: "/images/project-3.jpg",
        },
        {
          name: "Augusta Pharmaceutical Plant",
          type: "Industrial Piping",
          location: "Augusta, GA",
          year: "2022",
          description: "High-purity stainless steel piping installation for pharmaceutical manufacturing, including WFI systems and process utilities.",
          image: "/images/project-1.jpg",
        },
      ]}
    />
  )
}
