import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const PRIMARY_CONTACT_PHONE_DISPLAY = "+1 (770)-557-0019";
const PRIMARY_CONTACT_PHONE_LINK = "+17705570019";

const offices = [
  {
    name: "Headquarters",
    city: "Duluth, GA",
    address: "3483 Satellite Blvd, Ste 100\nDuluth, GA 30096",
    phone: PRIMARY_CONTACT_PHONE_DISPLAY,
    email: "info@wellinsinc.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Build Together"
        description="Ready to discuss your project? Our team of experts is here to help."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                Request a <span className="font-semibold">Quote</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we will contact you.
              </p>

              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                Get in <span className="font-semibold">Touch</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reach out directly or visit one of our offices.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Main Line</p>
                    <a
                      href={`tel:${PRIMARY_CONTACT_PHONE_LINK}`}
                      className="text-foreground hover:text-accent"
                    >
                      {PRIMARY_CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:info@wellinsinc.com"
                      className="text-foreground hover:text-accent"
                    >
                      info@wellinsinc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Business Hours
                    </p>
                    <p className="text-foreground">
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">
                  Our Offices
                </h3>
                <div className="mt-6 space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.name}
                      className="border-l-2 border-border pl-6"
                    >
                      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        {office.name}
                      </p>
                      <p className="mt-2 font-semibold text-foreground">
                        {office.city}
                      </p>
                      <div className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        <p className="whitespace-pre-line">{office.address}</p>
                      </div>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <a
                            href={`tel:${office.phone}`}
                            className="text-foreground hover:text-accent"
                          >
                            {office.phone}
                          </a>
                        </p>
                        <p>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-foreground hover:text-accent"
                          >
                            {office.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-semibold">
                24/7 Emergency Support
              </h2>
              <p className="mt-2 text-primary-foreground/70">
                For urgent plant shutdowns or emergency repairs
              </p>
            </div>
            <a
              href="tel:+12055559999"
              className="inline-flex items-center border border-primary-foreground/30 bg-transparent px-8 py-4 text-lg font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="mr-3 h-5 w-5" />
              +1 (205) 555-9999
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
