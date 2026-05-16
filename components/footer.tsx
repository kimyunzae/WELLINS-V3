import Image from "next/image";
import Link from "next/link";
import { primaryContact } from "@/data/company";
import { footerLinkSections } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020930] text-white">
      <Image
        src="/images/hero-industrial.webp"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/72 to-[#001A3D]/28" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logos/logo-wellins-footer.png"
                alt="Wellins Inc."
                width={140}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/78">
              Industrial systems expertise built on precise planning, safe
              execution, and reliable field delivery.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/72">
              {primaryContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-4">
                <a
                  href={`tel:${primaryContact.phoneHref}`}
                  className="transition-colors hover:text-white"
                >
                  {primaryContact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${primaryContact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {primaryContact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinkSections).map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/16 pt-7 md:flex-row">
          <p className="text-sm text-white/62">
            {new Date().getFullYear()} Wellins Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link
              href="/terms-of-use"
              className="text-sm text-white/62 transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
            <Link
              href="/georgia-privacy-notice"
              className="text-sm text-white/62 transition-colors hover:text-white"
            >
              Georgia Privacy Notice
            </Link>
            <Link
              href="/global-privacy-notice"
              className="text-sm text-white/62 transition-colors hover:text-white"
            >
              Global Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
