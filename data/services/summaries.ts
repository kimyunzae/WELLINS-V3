import type { ServiceSummary } from "@/types/services";


// 서비스 요약 정보를 정의하는 파일입니다. 각 서비스 요약은 고유한 슬러그, 제목, 설명, 이미지, 링크 등을 포함하는 객체로 표현됩니다. 이 데이터는 홈 페이지나 서비스 목록 페이지에서 각 서비스의 간략한 정보를 표시하는 데 활용됩니다.

export const serviceSummaries = [
  {
    slug: "equipment-installation",
    title: "Equipment Installation",
    description:
      "Precision installation of heavy industrial equipment with rigorous safety standards and minimal downtime.",
    homeDescription:
      "Heavy equipment installation executed with strict safety and shutdown control.",
    image: "/images/service-equipment.jpg",
    href: "/services/equipment-installation",
  },
  {
    slug: "industrial-piping",
    title: "Industrial Piping",
    description:
      "Complete piping solutions from design to installation for process, utility, and specialized applications.",
    homeDescription:
      "Process and utility piping delivered from layout to turnover.",
    image: "/images/service-piping.jpg",
    href: "/services/industrial-piping",
  },
  {
    slug: "hvac-system",
    title: "HVAC System",
    description:
      "Advanced climate control systems designed for industrial environments requiring precise temperature management.",
    homeDescription:
      "Industrial HVAC systems built for stable operation and efficiency.",
    image: "/images/service-hvac.jpg",
    href: "/services/hvac-system",
  },
  {
    slug: "insulation-jacketing",
    title: "Insulation & Jacketing",
    description:
      "Thermal insulation and protective jacketing for pipes, vessels, and equipment in demanding conditions.",
    homeDescription:
      "Thermal insulation and protective jacketing for critical assets.",
    image: "/images/service-insulation.jpg",
    href: "/services/insulation-jacketing",
  },
  {
    slug: "high-pressure-vessels",
    title: "High-Pressure Vessels",
    description:
      "Engineering and installation of pressure vessels meeting ASME standards for industrial applications.",
    homeDescription:
      "High-pressure vessel delivery aligned with ASME requirements.",
    image: "/images/service-vessels.jpg",
    href: "/services/high-pressure-vessels",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection",
    description:
      "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems.",
    homeDescription:
      "Integrated suppression systems tailored to facility risk conditions.",
    image: "/images/service-fire.jpg",
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
