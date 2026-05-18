import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { featuredLocations, serviceStates } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Company - Locations",
  description:
    "Find our headquarters and facilities across the Southeast.",
  path: "/company/location",
});

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
                        href={`tel:${location.phoneHref}`}
                        className="text-foreground hover:text-accent"
                      >
                        {location.phoneDisplay}
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

      {/* Service Area */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-foreground lg:text-4xl">
              Serviced <span className="font-semibold">Area</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Wellins Inc. is licensed to operate in eight states across the
              southeastern and midwestern United States.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {serviceStates.map((state, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <MapPin className="h-3.5 w-3.5" />
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
