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
  className?: string;
};

export default function NavigationDesktop({
  navigation,
  compact = false,
  className,
}: Props) {
  return (
    <NavigationMenu
      viewport={false}
      className={cn(
        "flex flex-none justify-start [--nav-dropdown-offset:21px]",
        className
      )}
    >
      <NavigationMenuList
        className={cn("flex-none justify-start", compact ? "gap-5" : "gap-8")}
      >
        {Object.values(navigation).map(({ label, items }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuTrigger
              className={cn(
                "h-auto gap-1 py-0 font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                compact ? "text-xs tracking-wide" : "text-sm tracking-wider"
              )}
            >
              <p className="text-[#2C2C2C]">{label}</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:mt-[var(--nav-dropdown-offset)] relative border-t-2 border-black/10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-4 before:bg-[#0096D9] after:content-[''] after:absolute after:left-4 after:top-0 after:h-[2px] after:w-4 after:bg-[#EE1A29] p-0">
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
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
