import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const PageNavMenu = (): React.JSX.Element => {
  return (
    <div className="flex justify-center  w-full">
      <NavigationMenu className="bg-amber-900 max-w-full">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            {/* <Link> */}
            <NavigationMenuLink>About me</NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Link> */}
            <NavigationMenuLink>Blog</NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Link> */}
            <NavigationMenuLink>GitHub</NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default PageNavMenu;
