import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Location | Wellins Inc.",
  description: "Find our headquarters and regional offices. Wellins Inc. serves industrial clients across eight states.",
}

const locations = [
  {
    name: "Headquarters",
    city: "Birmingham, AL",
    address: "1234 Industrial Parkway\nBirmingham, AL 35203",
    phone: "+1 (205) 555-1234",
    email: "info@wellinsinc.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
  },
  {
    name: "Texas Office",
    city: "Houston, TX",
    address: "5678 Energy Boulevard\nHouston, TX 77001",
    phone: "+1 (713) 555-5678",
    email: "texas@wellinsinc.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
  },
  {
    name: "Georgia Office",
    city: "Atlanta, GA",
    address: "9012 Manufacturing Way\nAtlanta, GA 30303",
    phone: "+1 (404) 555-9012",
    email: "georgia@wellinsinc.com",
    hours: "Mon-Fri: 7:00 AM - 5:00 PM",
  },
]

const serviceStates = [
  "Alabama", "Georgia", "Indiana", "Michigan", 
  "Ohio", "South Carolina", "Tennessee", "Texas"
]

export default function LocationPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Our Locations"
        description="Strategically positioned to serve industrial clients across the United States"
      />

      {/* Headquarters */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/headquarters.jpg"
                alt="Wellins Inc. Headquarters in Birmingham, Alabama"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Corporate Headquarters
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                Birmingham, <span className="font-semibold">Alabama</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Our headquarters serves as the central hub for all operations, 
                housing our executive team, engineering department, and main 
                fabrication facilities.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-foreground">1234 Industrial Parkway</p>
                    <p className="text-muted-foreground">Birmingham, AL 35203</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+12055551234" className="text-foreground hover:text-accent">
                    +1 (205) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:info@wellinsinc.com" className="text-foreground hover:text-accent">
                    info@wellinsinc.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">Mon-Fri: 7:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            Regional <span className="font-semibold">Offices</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <div key={index} className="border border-border bg-card p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {location.name}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{location.city}</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="whitespace-pre-line text-muted-foreground">{location.address}</p>
                  <p>
                    <a href={`tel:${location.phone}`} className="text-foreground hover:text-accent">
                      {location.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${location.email}`} className="text-foreground hover:text-accent">
                      {location.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight lg:text-4xl">
              Service <span className="font-semibold">Area</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
              Wellins Inc. is licensed to operate in eight states across the southeastern 
              and midwestern United States.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {serviceStates.map((state, index) => (
              <div key={index} className="border border-primary-foreground/20 p-4 text-center">
                <p className="font-medium">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
