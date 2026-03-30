import { ServiceDetail } from "@/components/service-detail"

export const metadata = {
  title: "HVAC System | Wellins Inc.",
  description: "Advanced industrial HVAC system design and installation for precise temperature and environmental control.",
}

export default function HVACSystemPage() {
  return (
    <ServiceDetail
      title="HVAC System"
      description="Advanced climate control systems designed for industrial environments requiring precise temperature management"
      image="/images/service-hvac.jpg"
      overview="Climate control and clean room delivery for mission-critical manufacturing environments."
      capabilities={[
        "Process cooling and heating systems",
        "Clean room HVAC systems",
        "Industrial ventilation and exhaust",
        "Chilled water systems",
        "Air handling unit installation",
        "Ductwork fabrication and installation",
        "Building automation integration",
        "Energy recovery systems",
      ]}
      applications={[
        "Automotive paint shops",
        "Pharmaceutical clean rooms",
        "Food processing facilities",
        "Data centers",
        "Electronics manufacturing",
        "Textile manufacturing",
        "Warehouse and distribution",
        "Heavy manufacturing plants",
      ]}
      benefits={[
        {
          title: "Energy Efficiency",
          description: "Systems designed to minimize operating costs while meeting environmental requirements.",
        },
        {
          title: "Process Integration",
          description: "HVAC systems coordinated with production processes for optimal performance.",
        },
        {
          title: "Compliance",
          description: "Systems meet ASHRAE, OSHA, and industry-specific environmental standards.",
        },
        {
          title: "Reliability",
          description: "Redundant designs ensure continuous operation of critical environmental controls.",
        },
        {
          title: "Smart Controls",
          description: "Advanced BAS integration for monitoring, optimization, and predictive maintenance.",
        },
        {
          title: "Service Support",
          description: "Ongoing maintenance programs keep your systems running at peak efficiency.",
        },
      ]}
    />
  )
}
