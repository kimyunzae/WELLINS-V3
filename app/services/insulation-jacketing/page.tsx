import { ServiceDetail } from "@/components/service-detail"

export const metadata = {
  title: "Insulation & Jacketing | Wellins Inc.",
  description: "Industrial insulation and protective jacketing services for pipes, vessels, and equipment.",
}

export default function InsulationJacketingPage() {
  return (
    <ServiceDetail
      title="Insulation & Jacketing"
      description="Thermal insulation and protective jacketing for pipes, vessels, and equipment in demanding conditions"
      image="/images/service-insulation.jpg"
      overview="Proper insulation is critical for energy efficiency, personnel safety, and process control in industrial facilities. Wellins Inc. provides complete insulation and jacketing services using the highest quality materials and installation techniques. Our work meets all relevant codes and standards while delivering the thermal performance your operations require."
      capabilities={[
        "Hot and cold pipe insulation",
        "Vessel and tank insulation",
        "Cryogenic insulation systems",
        "Acoustic insulation",
        "Metal jacketing (aluminum, stainless)",
        "PVC jacketing systems",
        "Removable insulation blankets",
        "Fireproofing applications",
      ]}
      applications={[
        "Refineries and petrochemical plants",
        "Chemical processing facilities",
        "Power generation plants",
        "Food and beverage processing",
        "Pharmaceutical manufacturing",
        "LNG and cryogenic facilities",
        "Paper and pulp mills",
        "District heating systems",
      ]}
      benefits={[
        {
          title: "Energy Savings",
          description: "Properly designed insulation systems significantly reduce energy costs and heat loss.",
        },
        {
          title: "Personnel Protection",
          description: "Insulation keeps surface temperatures safe for workers in the facility.",
        },
        {
          title: "Process Control",
          description: "Maintain precise temperatures for critical process applications.",
        },
        {
          title: "Corrosion Prevention",
          description: "Jacketing systems protect insulation and piping from weather and physical damage.",
        },
        {
          title: "Code Compliance",
          description: "All installations meet ASTM, ASHRAE, and industry insulation standards.",
        },
        {
          title: "Long Service Life",
          description: "Quality materials and installation ensure decades of reliable performance.",
        },
      ]}
    />
  )
}
