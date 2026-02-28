import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: {
    label: "Company",
    links: [
      { name: "About Us", href: "/company/about" },
      { name: "CEO Greeting", href: "/company/ceo-greeting" },
      { name: "History", href: "/company/history" },
      { name: "Organization", href: "/company/organization" },
      { name: "Location", href: "/company/location" },
    ],
  },
  services: {
    label: "Services",
    links: [
      {
        name: "Equipment Installation",
        href: "/services/equipment-installation",
      },
      { name: "Industrial Piping", href: "/services/industrial-piping" },
      { name: "HVAC System", href: "/services/hvac-system" },
      { name: "Fire Protection", href: "/services/fire-protection" },
    ],
  },
  projects: {
    label: "Projects",
    links: [
      { name: "Buford", href: "/projects/buford" },
      { name: "Georgia", href: "/projects/georgia" },
      { name: "Texas", href: "/projects/texas" },
      { name: "View All", href: "/projects" },
    ],
  },
  resources: {
    label: "Resources",
    links: [
      { name: "Brochure", href: "/pr-center/brochure" },
      { name: "News", href: "/pr-center/news" },
      { name: "PR Video", href: "/pr-center/video" },
      { name: "Contact", href: "/contact" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-muted/45 text-[#1F2937]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logos/logo-wellins.png"
                alt="Wellins Inc."
                width={140}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-[#4B5563]">
              Industrial engineering excellence since 1995. Delivering
              precision, safety, and performance across the United States.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#4B5563]">
              <p>3483 Satellite Blvd. Suite 100</p>
              <p>Duluth, GA 30096</p>
              <p className="mt-4">
                <a
                  href="tel:+17705570019"
                  className="transition-colors hover:text-[#111827]"
                >
                  +1 (770) 557-0019
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@wellinsinc.com"
                  className="transition-colors hover:text-[#111827]"
                >
                  info@wellinsinc.com
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                {section.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4B5563] transition-colors hover:text-[#111827]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#D8DEE6] pt-8 md:flex-row">
          <p className="text-sm text-[#6B7280]">
            {new Date().getFullYear()} Wellins Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link
              href="/terms-of-use"
              className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
            >
              Terms of Use
            </Link>
            <Link
              href="/georgia-privacy-notice"
              className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
            >
              Georgia Privacy Notice
            </Link>
            <Link
              href="/global-privacy-notice"
              className="text-sm text-[#6B7280] transition-colors hover:text-[#111827]"
            >
              Global Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
