import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const PageNavMenu = (): React.JSX.Element => (
  <div className="sticky w-full top-0 z-50">
    <div className="flex items-center ">
      <NavigationMenu className="bg-stone-800/80 backdrop-blur-md max-w-full">
        <NavigationMenuList className="space-x-4 flex items-center">
          <NavigationMenuItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
              <NavigationMenuLink className="text-xl">
                About me
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" />
          <NavigationMenuItem>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
              <NavigationMenuLink className="text-xl">Blog</NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" />
          <NavigationMenuItem>
            <NavLink
              to="https://github.com/ctrousdale"
              target="_blank"
              rel="noopener noreferrer"
              className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
              <NavigationMenuLink>
                <FaGithub />
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default PageNavMenu;
