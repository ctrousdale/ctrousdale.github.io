import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Separator } from "./ui/separator";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const PageNavMenu = (): React.JSX.Element => {
  return (
    <div className="sticky w-full">
      <div className="flex items-center ">
        <NavigationMenu className="bg-amber-900 max-w-full">
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
                <NavigationMenuLink className="text-xl">
                  Blog
                </NavigationMenuLink>
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
};

export default PageNavMenu;
