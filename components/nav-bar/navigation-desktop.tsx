import type { CSSProperties } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

type Props = {
  navigation: {
    [key: string]: {
      label: string;
      items: { name: string; href: string }[];
    };
  };
  compact?: boolean;
  dropdownOffset?: number;
  activeMenuKey?: string | null;
  className?: string;
};

export default function NavigationDesktop({
  navigation,
  compact = false,
  dropdownOffset = 21,
  activeMenuKey = null,
  className,
}: Props) {
  return (
    <NavigationMenu
      viewport={false}
      style={
        {
          "--nav-dropdown-offset": `${dropdownOffset}px`,
        } as CSSProperties
      }
      className={cn(
        "flex flex-none justify-start",
        className
      )}
    >
      <NavigationMenuList
        className={cn("flex-none justify-start", compact ? "gap-5" : "gap-8")}
      >
        {Object.entries(navigation).map(([key, { label, items }]) => {
          const isActive = activeMenuKey === key;

          return (
            <NavigationMenuItem key={label}>
              <NavigationMenuTrigger
                className={cn(
                  "relative h-auto !px-0 !py-0 font-medium text-zinc-700 transition-colors duration-200 hover:text-black data-[state=open]:text-black",
                  "after:pointer-events-none after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 after:content-['']",
                  "hover:after:scale-x-100 focus-visible:after:scale-x-100 data-[state=open]:after:scale-x-100",
                  isActive && "text-black after:scale-x-100",
                  compact ? "text-xs tracking-wide" : "text-sm tracking-wider"
                )}
              >
                <span>{label}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!mt-[var(--nav-dropdown-offset)] relative bg-white border-t-2 border-zinc-300 before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-4 before:bg-[#0096D9] after:content-[''] after:absolute after:left-4 after:top-0 after:h-[2px] after:w-4 after:bg-[#EE1A29] p-0">
                <div className="w-[200px] bg-card shadow-md">
                  {items.map((item) => (
                    <NavigationMenuLink
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-card-foreground transition-colors hover:bg-muted"
                    >
                      <p className="text-[#2C2C2C]">{item.name}</p>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
