import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const PageNavMenu = (): React.JSX.Element => (
  <div className="sticky top-0 z-50 w-full">
    <div className="flex items-center">
      <NavigationMenu className="max-w-full bg-stone-800/80 backdrop-blur-md">
        <NavigationMenuList className="flex items-center gap-x-4 text-white">
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
          <NavigationMenuItem>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
              <NavigationMenuLink className="text-xl">Blog</NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
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
          <NavigationMenuItem>
            <NavLink
              to="https://www.linkedin.com/in/ctrousdale/"
              target="_blank"
              rel="noopener noreferrer"
              className={({ isActive }) => (isActive ? "text-amber-200" : "")}
            >
              <NavigationMenuLink>
                <FaLinkedin />
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

export default PageNavMenu;
