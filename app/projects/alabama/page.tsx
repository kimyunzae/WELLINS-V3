import { ProjectDetail } from "@/components/project-detail"

export const metadata = {
  title: "Alabama Projects | Wellins Inc.",
  description: "Industrial engineering projects in Alabama including automotive, aerospace, and manufacturing facilities.",
}

export default function AlabamaProjectsPage() {
  return (
    <ProjectDetail
      state="Alabama"
      description="Home to our headquarters, Alabama represents our longest-standing regional commitment with projects spanning automotive, aerospace, and heavy manufacturing."
      stats={[
        { label: "Projects Completed", value: "75+" },
        { label: "Years Active", value: "29" },
        { label: "Major Clients", value: "25+" },
        { label: "Team Members", value: "50+" },
      ]}
      projects={[
        {
          name: "Birmingham Automotive Plant Expansion",
          type: "Equipment Installation",
          location: "Birmingham, AL",
          year: "2024",
          description: "A 250,000 sq ft expansion project for a major automotive manufacturer, featuring complete mechanical systems installation including industrial piping, HVAC, and fire protection systems.",
          image: "/images/project-1.jpg",
        },
        {
          name: "Huntsville Aerospace Facility",
          type: "Industrial Piping",
          location: "Huntsville, AL",
          year: "2023",
          description: "High-purity piping installation for a new aerospace manufacturing facility, including cleanroom HVAC systems and specialized gas delivery infrastructure.",
          image: "/images/project-2.jpg",
        },
        {
          name: "Mobile Chemical Processing Plant",
          type: "High-Pressure Vessels",
          location: "Mobile, AL",
          year: "2022",
          description: "Installation and commissioning of pressure vessels and process piping for a chemical manufacturing expansion, including full ASME code compliance.",
          image: "/images/project-3.jpg",
        },
      ]}
    />
  )
}
