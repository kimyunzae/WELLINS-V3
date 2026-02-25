"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavigationDesktop from "./navigation-desktop";
import NavigationMobile from "./navigation-mobile";

type DesktopMode = "full" | "compact" | "mobile";

const MOBILE_BREAKPOINT = 1024;
const SIDE_RESERVED_GAP = 64;
const COLLAPSE_BUFFER = 40;
const EXPAND_BUFFER = 72;

type ModeInput = {
  currentMode: DesktopMode;
  viewportWidth: number;
  navWidth: number;
  logoWidth: number;
  ctaWidth: number;
  fullMenuWidth: number;
  compactMenuWidth: number;
};

const resolveDesktopMode = ({
  currentMode,
  viewportWidth,
  navWidth,
  logoWidth,
  ctaWidth,
  fullMenuWidth,
  compactMenuWidth,
}: ModeInput): DesktopMode => {
  if (viewportWidth < MOBILE_BREAKPOINT) {
    return "mobile";
  }

  if (!navWidth || !logoWidth || !ctaWidth || !fullMenuWidth || !compactMenuWidth) {
    return currentMode;
  }

  const availableMenuSpace = navWidth - logoWidth - ctaWidth - SIDE_RESERVED_GAP;
  const fullFits = availableMenuSpace >= fullMenuWidth + COLLAPSE_BUFFER;
  const compactFits = availableMenuSpace >= compactMenuWidth + COLLAPSE_BUFFER;
  const fullExpandFits = availableMenuSpace >= fullMenuWidth + EXPAND_BUFFER;
  const compactExpandFits =
    availableMenuSpace >= compactMenuWidth + EXPAND_BUFFER;

  if (currentMode === "full") {
    if (fullFits) {
      return "full";
    }

    return compactFits ? "compact" : "mobile";
  }

  if (currentMode === "compact") {
    if (fullExpandFits) {
      return "full";
    }

    return compactFits ? "compact" : "mobile";
  }

  if (fullExpandFits) {
    return "full";
  }

  return compactExpandFits ? "compact" : "mobile";
};

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
  const [desktopMode, setDesktopMode] = useState<DesktopMode>("full");

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const fullMeasureRef = useRef<HTMLDivElement>(null);
  const compactMeasureRef = useRef<HTMLDivElement>(null);
  const ctaMeasureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frameId = 0;

    const recalculateLayout = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        setDesktopMode((currentMode) =>
          resolveDesktopMode({
            currentMode,
            viewportWidth: window.innerWidth,
            navWidth: navRef.current?.clientWidth ?? 0,
            logoWidth: logoRef.current?.getBoundingClientRect().width ?? 0,
            ctaWidth: ctaMeasureRef.current?.getBoundingClientRect().width ?? 0,
            fullMenuWidth:
              fullMeasureRef.current?.getBoundingClientRect().width ?? 0,
            compactMenuWidth:
              compactMeasureRef.current?.getBoundingClientRect().width ?? 0,
          })
        );
      });
    };

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(recalculateLayout)
        : null;

    const observedElements = [
      navRef.current,
      logoRef.current,
      fullMeasureRef.current,
      compactMeasureRef.current,
      ctaMeasureRef.current,
    ];

    observedElements.forEach((element) => {
      if (element && observer) {
        observer.observe(element);
      }
    });

    window.addEventListener("resize", recalculateLayout);
    if (document.fonts) {
      void document.fonts.ready.then(recalculateLayout);
    }
    recalculateLayout();

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      observer?.disconnect();
      window.removeEventListener("resize", recalculateLayout);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black border-b border-black/10">
      <nav
        ref={navRef}
        className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8"
      >
        {/* Logo */}
        <div ref={logoRef} className="z-10 flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/logo-wellins.png"
              alt="Wellins Inc."
              width={227}
              height={50}
              priority
              className="h-[50px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            desktopMode === "mobile" ? "hidden" : "hidden lg:block"
          )}
        >
          <div className="pointer-events-auto">
            <NavigationDesktop
              navigation={navigation}
              compact={desktopMode === "compact"}
            />
          </div>
        </div>

        <div className="z-10 flex items-center">
          {/* Contact Button */}
          <Link
            href="/contact"
            className={cn(
              "bg-transparent px-6 py-2 text-sm font-medium tracking-wider transition-colors",
              desktopMode === "mobile" ? "hidden" : "hidden lg:block"
            )}
          >
            GET A QUOTE
          </Link>

          {/* Mobile Menu Button */}
          <NavigationMobile
            navigation={navigation}
            forceVisible={desktopMode === "mobile"}
          />
        </div>

        {/* Off-screen measurements for responsive mode selection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] top-0 opacity-0"
        >
          <div ref={fullMeasureRef}>
            <NavigationDesktop navigation={navigation} />
          </div>
          <div ref={compactMeasureRef} className="mt-2">
            <NavigationDesktop navigation={navigation} compact />
          </div>
          <span
            ref={ctaMeasureRef}
            className="inline-block whitespace-nowrap px-6 py-2 text-sm font-medium tracking-wider"
          >
            GET A QUOTE
          </span>
        </div>
      </nav>
    </header>
  );
}
