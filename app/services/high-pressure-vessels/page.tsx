import { ServiceDetail } from "@/components/service-detail"

export const metadata = {
  title: "High-Pressure Vessels | Wellins Inc.",
  description: "ASME-compliant pressure vessel installation and maintenance for industrial applications.",
}

export default function HighPressureVesselsPage() {
  return (
    <ServiceDetail
      title="High-Pressure Vessels"
      description="Engineering and installation of pressure vessels meeting ASME standards for industrial applications"
      image="/images/service-vessels.jpg"
      overview="Code-compliant fabrication and installation for liquid and gas processing under extreme conditions."
      capabilities={[
        "Pressure vessel rigging and setting",
        "Foundation and anchor design",
        "Nozzle and connection installation",
        "Vessel internal installation",
        "Field modifications and repairs",
        "Hydrostatic and pneumatic testing",
        "ASME code compliance verification",
        "National Board registration support",
      ]}
      applications={[
        "Chemical reactors",
        "Heat exchangers",
        "Storage tanks",
        "Boilers and steam drums",
        "Air receivers",
        "Process columns and towers",
        "Distillation equipment",
        "Pressure filtration systems",
      ]}
      benefits={[
        {
          title: "ASME Expertise",
          description: "Deep knowledge of ASME Section VIII requirements ensures compliant installations.",
        },
        {
          title: "Heavy Rigging",
          description: "Experienced crews safely handle the largest and heaviest pressure vessels.",
        },
        {
          title: "Quality Welding",
          description: "ASME-certified welders for all vessel modifications and repairs.",
        },
        {
          title: "Testing Services",
          description: "Complete hydrostatic and pneumatic testing with certified documentation.",
        },
        {
          title: "Regulatory Support",
          description: "Assistance with jurisdictional requirements and National Board registration.",
        },
        {
          title: "Lifecycle Support",
          description: "From initial installation through maintenance and eventual replacement.",
        },
      ]}
    />
  )
}
