import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavLink, type NavLinkRenderProps } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const onHover = (props: NavLinkRenderProps) =>
  props.isActive ? "text-amber-200" : "";

const PageNavMenu = (): React.JSX.Element => (
  <div className="sticky top-0 z-50 w-full">
    <NavigationMenu className="max-w-full bg-stone/5 shadow-2xl backdrop-blur-sm backdrop-saturate-100">
      <NavigationMenuList className="flex items-center gap-x-4 text-white">
        <NavigationMenuItem>
          <NavLink to="/" className={onHover}>
            <NavigationMenuLink className="text-xl">
              About me
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/blog" className={onHover}>
            <NavigationMenuLink className="text-xl">Blog</NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="https://github.com/ctrousdale"
            target="_blank"
            rel="noopener noreferrer"
            className={onHover}
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
            className={onHover}
          >
            <NavigationMenuLink>
              <FaLinkedin />
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="https://leetcode.com/u/fable127/"
            target="_blank"
            rel="noopener noreferrer"
            className={onHover}
          >
            <NavigationMenuLink>
              <SiLeetcode />
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default PageNavMenu;
