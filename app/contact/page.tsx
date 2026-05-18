import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import {
  contactBusinessHours,
  contactOffices,
  primaryContact,
} from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Wellins Inc. for industrial engineering inquiries, project estimates, and partnership opportunities.",
  path: "/contact",
});

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
                      href={`tel:${primaryContact.phoneHref}`}
                      className="text-foreground hover:text-accent"
                    >
                      {primaryContact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${primaryContact.email}`}
                      className="text-foreground hover:text-accent"
                    >
                      {primaryContact.email}
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
                      {contactBusinessHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">
                  Our Offices
                </h3>
                <div className="mt-6 space-y-6">
                  {contactOffices.map((office) => (
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
                        <p>
                          {office.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <a
                            href={`tel:${office.phoneHref}`}
                            className="text-foreground hover:text-accent"
                          >
                            {office.phoneDisplay}
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

      <Footer />
    </main>
  );
}
