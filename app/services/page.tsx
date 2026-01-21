import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Wellins Inc.",
  description:
    "Comprehensive industrial engineering services including equipment installation, piping, HVAC, insulation, pressure vessels, and fire protection.",
};

const services = [
  {
    title: "Equipment Installation",
    description:
      "Precision installation of heavy industrial equipment with rigorous safety standards and minimal downtime.",
    image: "/images/service-equipment.jpg",
    href: "/services/equipment-installation",
  },
  {
    title: "Industrial Piping",
    description:
      "Complete piping solutions from design to installation for process, utility, and specialized applications.",
    image: "/images/service-piping.jpg",
    href: "/services/industrial-piping",
  },
  {
    title: "HVAC System",
    description:
      "Advanced climate control systems designed for industrial environments requiring precise temperature management.",
    image: "/images/service-hvac.jpg",
    href: "/services/hvac-system",
  },
  {
    title: "Insulation & Jacketing",
    description:
      "Thermal insulation and protective jacketing for pipes, vessels, and equipment in demanding conditions.",
    image: "/images/service-insulation.jpg",
    href: "/services/insulation-jacketing",
  },
  {
    title: "High-Pressure Vessels",
    description:
      "Engineering and installation of pressure vessels meeting ASME standards for industrial applications.",
    image: "/images/service-vessels.jpg",
    href: "/services/high-pressure-vessels",
  },
  {
    title: "Fire Protection",
    description:
      "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems.",
    image: "/images/service-fire.jpg",
    href: "/services/fire-protection",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Services"
        title="Comprehensive Industrial Engineering Solutions"
        description="From initial design to final installation, we deliver end-to-end solutions that meet the highest standards of quality and safety."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                    <span className="font-semibold">{service.title}</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
