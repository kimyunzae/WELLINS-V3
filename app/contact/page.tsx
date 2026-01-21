"use client";

import React from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav-bar/navigation";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { useState } from "react";

const offices = [
  {
    name: "Headquarters",
    city: "Birmingham, AL",
    address: "1234 Industrial Parkway\nBirmingham, AL 35203",
    phone: "+1 (205) 555-1234",
    email: "info@wellinsinc.com",
  },
  {
    name: "Texas Office",
    city: "Houston, TX",
    address: "5678 Energy Boulevard\nHouston, TX 77001",
    phone: "+1 (713) 555-5678",
    email: "texas@wellinsinc.com",
  },
  {
    name: "Georgia Office",
    city: "Atlanta, GA",
    address: "9012 Manufacturing Way\nAtlanta, GA 30303",
    phone: "+1 (404) 555-9012",
    email: "georgia@wellinsinc.com",
  },
];

const services = [
  "Equipment Installation",
  "Industrial Piping",
  "HVAC System",
  "Insulation & Jacketing",
  "High-Pressure Vessels",
  "Fire Protection",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

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
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                Request a <span className="font-semibold">Quote</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and one of our team members will be in
                touch within 24 hours.
              </p>

              {/* contact form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="Acme Manufacturing"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="john@acme.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-foreground"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light tracking-tight text-foreground lg:text-3xl">
                Get in <span className="font-semibold">Touch</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reach out directly or visit one of our offices.
              </p>

              {/* General Contact */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Main Line</p>
                    <a
                      href="tel:+12055551234"
                      className="text-foreground hover:text-accent"
                    >
                      +1 (205) 555-1234
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

              {/* Office Locations */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">
                  Our Offices
                </h3>
                <div className="mt-6 space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-2 border-border pl-6">
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

      {/* Emergency Contact */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-semibold">24/7 Emergency Support</h2>
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
