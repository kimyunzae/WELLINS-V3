import Link from "next/link"
import { ArrowRight, Wrench, Wind, Flame, Box, Gauge, Shield } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Equipment Installation",
    description: "Precision installation of heavy industrial equipment with rigorous safety standards and minimal downtime.",
    href: "/services/equipment-installation",
  },
  {
    icon: Gauge,
    title: "Industrial Piping",
    description: "Complete piping solutions from design to installation for process, utility, and specialized applications.",
    href: "/services/industrial-piping",
  },
  {
    icon: Wind,
    title: "HVAC System",
    description: "Advanced climate control systems designed for industrial environments requiring precise temperature management.",
    href: "/services/hvac-system",
  },
  {
    icon: Box,
    title: "Insulation & Jacketing",
    description: "Thermal insulation and protective jacketing for pipes, vessels, and equipment in demanding conditions.",
    href: "/services/insulation-jacketing",
  },
  {
    icon: Gauge,
    title: "High-Pressure Vessels",
    description: "Engineering and installation of pressure vessels meeting ASME standards for industrial applications.",
    href: "/services/high-pressure-vessels",
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Comprehensive fire suppression systems including sprinklers, alarms, and specialized protection systems.",
    href: "/services/fire-protection",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight lg:text-4xl xl:text-5xl">
            Comprehensive <span className="font-semibold">Industrial Services</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
            From initial design to final installation, we provide end-to-end 
            industrial engineering solutions that meet the highest standards 
            of quality and safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-px bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-primary p-8 transition-colors hover:bg-primary-foreground/5 lg:p-10"
            >
              <service.icon className="h-8 w-8 text-primary-foreground/60" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
                {service.description}
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-primary-foreground/80 transition-colors group-hover:text-primary-foreground">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
