import { ServiceDetail } from "@/components/service-detail"

export const metadata = {
  title: "Industrial Piping | Wellins Inc.",
  description: "Complete industrial piping solutions from design to installation for process, utility, and specialized applications.",
}

export default function IndustrialPipingPage() {
  return (
    <ServiceDetail
      title="Industrial Piping"
      description="Complete piping solutions from design to installation for process, utility, and specialized applications"
      image="/images/service-piping.jpg"
      overview="Wellins Inc. provides comprehensive industrial piping services for the most demanding applications. From high-purity pharmaceutical systems to high-pressure petrochemical processes, our certified pipefitters and welders deliver installations that meet the strictest industry standards. We handle everything from initial design support through final testing and commissioning."
      capabilities={[
        "Process piping systems design and installation",
        "High-purity and sanitary piping",
        "High-pressure piping systems",
        "Carbon steel, stainless steel, and alloy piping",
        "Pipe fabrication and prefabrication",
        "ASME B31.1 and B31.3 code compliance",
        "Pipe supports and hangers",
        "Hydrostatic testing and certification",
      ]}
      applications={[
        "Chemical processing plants",
        "Petrochemical refineries",
        "Pharmaceutical manufacturing",
        "Food and beverage production",
        "Power generation facilities",
        "Water treatment plants",
        "Pulp and paper mills",
        "Semiconductor manufacturing",
      ]}
      benefits={[
        {
          title: "Code Compliance",
          description: "All installations meet ASME, ANSI, and industry-specific codes and standards.",
        },
        {
          title: "Certified Welders",
          description: "AWS and ASME certified welders ensure highest quality joints and connections.",
        },
        {
          title: "Prefabrication",
          description: "Shop prefabrication reduces field installation time and improves quality control.",
        },
        {
          title: "Material Expertise",
          description: "Experience with carbon steel, stainless, chrome-moly, and exotic alloys.",
        },
        {
          title: "Testing & Documentation",
          description: "Complete NDE testing, radiography, and documentation packages.",
        },
        {
          title: "Shutdown Support",
          description: "24/7 availability for planned shutdowns and emergency repairs.",
        },
      ]}
    />
  )
}
