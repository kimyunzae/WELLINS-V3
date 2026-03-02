import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Location | Wellins Inc.",
  description:
    "Find our headquarters and facilities across the Southeast.",
};

const featuredLocations = [
  {
    label: "Corporate Headquarters",
    city: "Duluth",
    state: "Georgia",
    description:
      "Our headquarters in Duluth serves as the central hub for all operations, housing leadership, engineering support, and project coordination teams.",
    addressLines: ["3483 Satellite Blvd. Suite 100", "Duluth, GA 30096"],
    mapTitle: "Wellins Inc. Headquarters in Duluth, GA",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.149682792209!2d-84.11853602396974!3d33.96063317317882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5aefb7a58cb15%3A0x6af73d1d65eee5d4!2s3483%20Satellite%20Blvd%20%23100%2C%20Duluth%2C%20GA%2030096!5e0!3m2!1sen!2sus!4v1700000000000",
    phone: "+1 (770) 557-0019",
    email: "info@wellinsinc.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM ET",
  },
  {
    label: "Manufacturing Facility",
    city: "Buford",
    state: "Georgia",
    description:
      "Our new manufacturing facility in Buford expands fabrication capacity for high-pressure piping, vessels, and specialized production support across the Southeast.",
    addressLines: ["974 Gainesville Hwy", "Buford, GA 30518"],
    mapTitle: "Wellins Inc. Manufacturing Facility in Buford, GA",
    mapSrc:
      "https://www.google.com/maps?q=974+Gainesville+Hwy,+Buford,+GA+30518&output=embed",
    phone: "+1 (770) 557-0019",
    email: "info@wellinsinc.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM ET",
  },
];

const locations = [
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
];

const serviceStates = [
  "Georgia",
  "Tennessee",
  "South Carolina",
  "Alabama",
  "Texas",
  "Louisiana",
];

export default function LocationPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Company"
        title="Our Locations"
        description="Licensed across GA, TN, SC, AL, TX, and LA. Rapid-response installation teams ready to mobilize nationwide."
      />

      {/* Primary Locations */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="space-y-20">
            {featuredLocations.map((location) => (
              <div
                key={location.label}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
                  <iframe
                    title={location.mapTitle}
                    src={location.mapSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {location.label}
                  </p>
                  <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                    {location.city}, <span className="font-semibold">{location.state}</span>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {location.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-foreground">{location.addressLines[0]}</p>
                        <p className="text-muted-foreground">{location.addressLines[1]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a
                        href={`tel:${location.phone.replace(/[^+\d]/g, "")}`}
                        className="text-foreground hover:text-accent"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-foreground hover:text-accent"
                      >
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
            Our <span className="font-semibold">Facilities</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <div key={index} className="border border-border bg-card p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {location.name}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {location.city}
                </h3>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="whitespace-pre-line text-muted-foreground">
                    {location.address}
                  </p>
                  <p>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-foreground hover:text-accent"
                    >
                      {location.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-foreground hover:text-accent"
                    >
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
              Wellins Inc. is licensed to operate in eight states across the
              southeastern and midwestern United States.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {serviceStates.map((state, index) => (
              <div
                key={index}
                className="border border-primary-foreground/20 p-4 text-center"
              >
                <p className="font-medium">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
