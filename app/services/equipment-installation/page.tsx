import { ServiceDetail } from "@/components/service-detail"

export const metadata = {
  title: "Equipment Installation | Wellins Inc.",
  description: "Precision industrial equipment installation services with rigorous safety standards and minimal downtime.",
}

export default function EquipmentInstallationPage() {
  return (
    <ServiceDetail
      title="Equipment Installation"
      description="Precision installation of heavy industrial equipment with rigorous safety standards and minimal downtime"
      image="/images/service-equipment.jpg"
      overview="Our equipment installation services cover the full spectrum of industrial machinery, from small precision instruments to massive production equipment weighing hundreds of tons. We work closely with equipment manufacturers and facility owners to ensure every installation meets exact specifications while minimizing disruption to ongoing operations."
      capabilities={[
        "Heavy machinery rigging and positioning",
        "Precision alignment and leveling",
        "Foundation and anchor bolt installation",
        "Electrical and control system integration",
        "Hydraulic and pneumatic connections",
        "Commissioning and startup support",
        "Equipment relocation and retrofit",
        "Turnkey installation management",
      ]}
      applications={[
        "Automotive manufacturing lines",
        "Food and beverage processing equipment",
        "Pharmaceutical production systems",
        "Paper and pulp mill machinery",
        "Steel and metal processing equipment",
        "Chemical processing reactors",
        "Packaging and material handling systems",
        "Power generation equipment",
      ]}
      benefits={[
        {
          title: "Minimal Downtime",
          description: "Detailed planning and efficient execution reduce installation time and get your equipment operational faster.",
        },
        {
          title: "Safety Excellence",
          description: "Rigorous safety protocols protect workers and your facility throughout the installation process.",
        },
        {
          title: "Manufacturer Partnerships",
          description: "Direct relationships with major equipment manufacturers ensure installation meets warranty requirements.",
        },
        {
          title: "Complete Documentation",
          description: "Comprehensive as-built documentation and equipment records for your maintenance team.",
        },
        {
          title: "Experienced Crews",
          description: "Certified millwrights and riggers with decades of experience in heavy industrial installations.",
        },
        {
          title: "Project Coordination",
          description: "Single point of contact manages all aspects of your installation project.",
        },
      ]}
    />
  )
}
