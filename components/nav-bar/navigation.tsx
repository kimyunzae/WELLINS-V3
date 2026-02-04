"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationDesktop from "./navigation-desktop";
import NavigationMobile from "./navigation-mobile";

const navigation = {
  company: {
    label: "COMPANY",
    items: [
      { name: "About Us", href: "/company/about" },
      { name: "CEO Greeting", href: "/company/ceo-greeting" },
      { name: "History", href: "/company/history" },
      { name: "Organization", href: "/company/organization" },
      { name: "Location", href: "/company/location" },
    ],
  },
  services: {
    label: "SERVICES",
    items: [
      {
        name: "Equipment Installation",
        href: "/services/equipment-installation",
      },
      { name: "Industrial Piping", href: "/services/industrial-piping" },
      { name: "HVAC System", href: "/services/hvac-system" },
      {
        name: "Insulation & Jacketing",
        href: "/services/insulation-jacketing",
      },
      {
        name: "High-Pressure Vessels",
        href: "/services/high-pressure-vessels",
      },
      { name: "Fire Protection", href: "/services/fire-protection" },
    ],
  },
  projects: {
    label: "PROJECTS",
    items: [
      { name: "Buford", href: "/projects/buford" },
      { name: "Georgia", href: "/projects/georgia" },
      { name: "Indiana", href: "/projects/indiana" },
      { name: "Michigan", href: "/projects/michigan" },
      { name: "Ohio", href: "/projects/ohio" },
      { name: "South Carolina", href: "/projects/south-carolina" },
      { name: "Tennessee", href: "/projects/tennessee" },
      { name: "Texas", href: "/projects/texas" },
    ],
  },
  prCenter: {
    label: "PR CENTER",
    items: [
      { name: "Brochure", href: "/pr-center/brochure" },
      { name: "News", href: "/pr-center/news" },
      { name: "PR Video", href: "/pr-center/video" },
    ],
  },
};

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black border-b border-black/10">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <NavigationDesktop navigation={navigation} />

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden  bg-transparent px-6 py-2 text-sm font-medium tracking-wider  transition-colors  lg:block"
        >
          GET A QUOTE
        </Link>

        {/* Mobile Menu Button */}
        <NavigationMobile navigation={navigation} />
      </nav>
    </header>
  );
}
