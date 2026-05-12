"use client";

import { useEffect, useState } from "react";
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
      href?: string;
      items?: { name: string; href: string }[];
    };
  };
  forceVisible?: boolean;
};

export default function NavigationMobile({
  navigation,
  forceVisible = false,
}: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = (key: string) => {
    setActiveSection((current) => (current === key ? null : key));
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      if (media.matches && !forceVisible) {
        setOpen(false);
        setActiveSection(null);
      }
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [forceVisible]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setActiveSection(null);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button
          className={cn(!forceVisible && "lg:hidden")}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className={cn("gap-0 p-0", !forceVisible && "lg:hidden")}
      >
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
            {Object.entries(navigation).map(([key, { label, href, items }]) => {
              const menuItems = items ?? [];
              const isDirectLink = Boolean(href) && menuItems.length === 0;

              if (isDirectLink && href) {
                return (
                  <div key={key} className="border-b border-border/60">
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className="block py-4 text-sm font-medium tracking-wider text-foreground"
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </div>
                );
              }

              const isOpen = activeSection === key;
              const panelId = `nav-mobile-${key}`;

              return (
                <div key={key} className="border-b border-border/60">
                  {href ? (
                    <div className="flex items-center justify-between">
                      <SheetClose asChild>
                        <Link
                          href={href}
                          className="block flex-1 py-4 text-sm font-medium tracking-wider text-foreground"
                        >
                          {label}
                        </Link>
                      </SheetClose>
                      <button
                        type="button"
                        onClick={() => handleToggle(key)}
                        className="flex h-12 w-12 items-center justify-end text-foreground"
                        aria-label={`${label} submenu`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleToggle(key)}
                      className="flex w-full items-center justify-between py-4 text-sm font-medium tracking-wider text-foreground"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      {label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                  <div
                    id={panelId}
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isOpen ? "mt-2 max-h-[400px]" : "max-h-0"
                    )}
                  >
                    {menuItems.map((item) => (
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
