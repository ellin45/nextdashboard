"use client";
import React from "react";
import {House, Users, Package, Shirt, Component} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Link from "next/link";
const menuItems = [
  {href: "/", label: "Dashboard", icon: Users},
  {href: "/customers", label: "Customers", icon: Users},
  {href: "/orders", label: "Orders", icon: Package},
  {href: "/products", label: "Products", icon: Shirt},
  {href: "/team", label: "Team", icon: Component},
];
export default function menuLinks({isOpen}: {isOpen: boolean}) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <ul className="flex flex-col gap-10">
        {menuItems.map(({href, label, icon: Icon}) => {
          const isActive =
            (pathname.includes(href) && href.length > 1) || pathname === href;

          return (
            <li key={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={href}>
                    <motion.div className="flex gap-4 items-center py-1 rounded-md">
                      <Icon size={23} className="mb-1" />
                    </motion.div>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
}
