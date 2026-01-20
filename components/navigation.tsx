"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

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
      { name: "Equipment Installation", href: "/services/equipment-installation" },
      { name: "Industrial Piping", href: "/services/industrial-piping" },
      { name: "HVAC System", href: "/services/hvac-system" },
      { name: "Insulation & Jacketing", href: "/services/insulation-jacketing" },
      { name: "High-Pressure Vessels", href: "/services/high-pressure-vessels" },
      { name: "Fire Protection", href: "/services/fire-protection" },
    ],
  },
  projects: {
    label: "PROJECTS",
    items: [
      { name: "Alabama", href: "/projects/alabama" },
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
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-primary-foreground/30">
            <span className="text-lg font-bold tracking-tighter">W</span>
          </div>
          <span className="text-lg font-semibold tracking-wide">WELLINS INC.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {Object.entries(navigation).map(([key, { label, items }]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium tracking-wider text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {label}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === key && "rotate-180"
                )} />
              </button>
              
              {/* Dropdown */}
              <div className={cn(
                "absolute left-0 top-full pt-2 opacity-0 invisible transition-all duration-200",
                activeDropdown === key && "opacity-100 visible"
              )}>
                <div className="min-w-[200px] border border-border bg-card py-2 shadow-lg">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-card-foreground transition-colors hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <Link
            href="/contact"
            className="text-sm font-medium tracking-wider text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            CONTACT US
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden border border-primary-foreground/30 bg-transparent px-6 py-2 text-sm font-medium tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary lg:block"
        >
          GET A QUOTE
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-300",
        mobileMenuOpen ? "max-h-[80vh] border-t border-primary-foreground/10" : "max-h-0"
      )}>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
          {Object.entries(navigation).map(([key, { label, items }]) => (
            <div key={key} className="border-b border-primary-foreground/10 py-4">
              <button
                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                className="flex w-full items-center justify-between text-sm font-medium tracking-wider"
              >
                {label}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === key && "rotate-180"
                )} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                activeDropdown === key ? "mt-2 max-h-[400px]" : "max-h-0"
              )}>
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-4 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            className="block py-4 text-sm font-medium tracking-wider"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            href="/contact"
            className="mt-4 block border border-primary-foreground/30 bg-transparent px-6 py-3 text-center text-sm font-medium tracking-wider transition-colors hover:bg-primary-foreground hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </header>
  )
}
