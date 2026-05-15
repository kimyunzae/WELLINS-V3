import type { Service } from "@/types/services";

export const fireProtectionService = {
  slug: "fire-protection",
  title: "Fire Protection",
  description:
    "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems.",
  detailDescription:
    "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems",
  metadataDescription:
    "Comprehensive industrial fire protection systems including sprinklers, suppression, and detection systems.",
  homeDescription:
    "Integrated suppression systems tailored to facility risk conditions.",
  image: "/images/service-fire.jpg",
  href: "/services/fire-protection",
  overview:
    "Turnkey suppression networks, alarm integration and ongoing inspection programs.",
  capabilities: [
    "Wet and dry sprinkler systems",
    "Deluge and pre-action systems",
    "Foam suppression systems",
    "Clean agent suppression (FM-200, Novec)",
    "Fire pump installation",
    "Underground fire mains",
    "Fire detection and alarm systems",
    "Kitchen hood suppression",
  ],
  applications: [
    "Manufacturing facilities",
    "Warehouses and distribution centers",
    "Chemical storage areas",
    "Paint spray booths",
    "Server rooms and data centers",
    "Flammable liquid storage",
    "Aircraft hangars",
    "Power generation facilities",
  ],
  benefits: [
    {
      title: "NFPA Compliance",
      description:
        "All systems designed and installed to meet applicable NFPA codes and standards.",
    },
    {
      title: "Insurance Approval",
      description:
        "Designs coordinated with insurance carriers to meet their requirements.",
    },
    {
      title: "Hazard Analysis",
      description:
        "Thorough evaluation of facility hazards ensures appropriate protection levels.",
    },
    {
      title: "Integrated Systems",
      description:
        "Fire protection coordinated with building systems and emergency procedures.",
    },
    {
      title: "Testing & Certification",
      description:
        "Complete system testing and documentation for code compliance.",
    },
    {
      title: "Maintenance Programs",
      description:
        "Ongoing inspection and maintenance keeps your systems ready when needed.",
    },
  ],
} satisfies Service;
