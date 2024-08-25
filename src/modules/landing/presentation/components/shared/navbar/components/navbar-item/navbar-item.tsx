"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NAVBARITEMS } from "../../../../../constants/nav-bar-items.constant";
import { useLandingNavStore } from "../../../../../stores/nav-bar.store";
import handleLandingElementIntoView from "@/modules/shared/presentation/utils/handle-into-view/handle-element-into-view";

interface NavbarItemProps {
  className?: string;
  navBarItem: (typeof NAVBARITEMS)[0];
}
export default function NavbarItem({ navBarItem, className }: NavbarItemProps) {
  const setMobileMenu = useLandingNavStore((state) => state.setIsOpenMobileMenu);

  return (
    <li
      className={cn("", {
        [`${className}`]: !!className,
      })}
      onClick={(event) => {
        handleLandingElementIntoView(navBarItem.idSection);
        setMobileMenu(false);
      }}
    >
      {navBarItem.name}
    </li>
  );
}
