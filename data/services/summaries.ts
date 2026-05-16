import type { ServiceSummary } from "@/types/services";



export const serviceSummaries = [
  {
    slug: "equipment-installation",
    title: "Equipment Installation",
    description:
      "Precision installation of heavy industrial equipment with rigorous safety standards and minimal downtime.",
    homeDescription:
      "Heavy equipment installation executed with strict safety and shutdown control.",
    image: "/images/service-equipment.webp",
    href: "/services/equipment-installation",
  },
  {
    slug: "industrial-piping",
    title: "Industrial Piping",
    description:
      "Complete piping solutions from design to installation for process, utility, and specialized applications.",
    homeDescription:
      "Process and utility piping delivered from layout to turnover.",
    image: "/images/service-piping.webp",
    href: "/services/industrial-piping",
  },
  {
    slug: "hvac-system",
    title: "HVAC System",
    description:
      "Advanced climate control systems designed for industrial environments requiring precise temperature management.",
    homeDescription:
      "Industrial HVAC systems built for stable operation and efficiency.",
    image: "/images/service-hvac.webp",
    href: "/services/hvac-system",
  },
  {
    slug: "insulation-jacketing",
    title: "Insulation & Jacketing",
    description:
      "Thermal insulation and protective jacketing for pipes, vessels, and equipment in demanding conditions.",
    homeDescription:
      "Thermal insulation and protective jacketing for critical assets.",
    image: "/images/service-insulation.webp",
    href: "/services/insulation-jacketing",
  },
  {
    slug: "high-pressure-vessels",
    title: "High-Pressure Vessels",
    description:
      "Engineering and installation of pressure vessels meeting ASME standards for industrial applications.",
    homeDescription:
      "High-pressure vessel delivery aligned with ASME requirements.",
    image: "/images/service-vessels.webp",
    href: "/services/high-pressure-vessels",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection",
    description:
      "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems.",
    homeDescription:
      "Integrated suppression systems tailored to facility risk conditions.",
    image: "/images/service-fire.webp",
    href: "/services/fire-protection",
  },
] satisfies ServiceSummary[];

export const serviceNavigationLinks = serviceSummaries.map(({ title, href }) => ({
  name: title,
  href,
}));

export const contactServiceOptions = [
  ...serviceSummaries.map((service) => service.title),
  "Other",
];
