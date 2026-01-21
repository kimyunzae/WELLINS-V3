"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  navigation: {
    [key: string]: {
      label: string;
      items: { name: string; href: string }[];
    };
  };
};

export default function NavigationMobile({ navigation }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setActiveSection((current) => (current === key ? null : key));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="lg:hidden gap-0 p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile navigation</SheetTitle>
        </SheetHeader>
        <div className="max-h-[80svh] overflow-y-auto">
          <div className="border-b border-border px-6 py-4">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              MENU
            </p>
          </div>
          <div className="px-6 py-4">
            {Object.entries(navigation).map(([key, { label, items }]) => {
              const isOpen = activeSection === key;
              const panelId = `nav-mobile-${key}`;

              return (
                <div key={key} className="border-b border-border/60">
                  <button
                    onClick={() => handleToggle(key)}
                    className="flex w-full items-center justify-between py-4 text-sm font-medium tracking-wider text-foreground"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isOpen ? "mt-2 max-h-[400px]" : "max-h-0",
                    )}
                  >
                    {items.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="block py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              );
            })}
            <SheetClose asChild>
              <Link
                href="/contact"
                className="block py-4 text-sm font-medium tracking-wider text-foreground"
              >
                CONTACT US
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/contact"
                className="mt-4 block border border-foreground/20 px-6 py-3 text-center text-sm font-medium tracking-wider transition-colors hover:bg-foreground hover:text-background"
              >
                GET A QUOTE
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
