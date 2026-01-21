import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

type Porps = {
  navigation: {
    [key: string]: {
      label: string;
      items: { name: string; href: string }[];
    };
  };
};

export default function NavigationDesktop({ navigation }: Porps) {
  return (
    <NavigationMenu
      viewport={false}
      className="hidden lg:flex flex-none justify-start [--nav-dropdown-offset:23px]"
    >
      <NavigationMenuList className="flex-none justify-start gap-8">
        {Object.values(navigation).map(({ label, items }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuTrigger className="h-auto gap-1 px-0 py-0 text-sm font-medium tracking-wider text-primary-foreground/80 transition-colors hover:text-primary-foreground">
              <p className="text-[#2C2C2C]">{label}</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:mt-[var(--nav-dropdown-offset)] border-t-3 p-0">
              <div className="w-[200px] bg-card shadow-md">
                {items.map((item) => (
                  <NavigationMenuLink
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm  text-card-foreground transition-colors hover:bg-muted"
                  >
                    <p className="text-[#2C2C2C]">{item.name}</p>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="text-sm font-medium tracking-wider text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <p className="text-black">CONTACT US</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
