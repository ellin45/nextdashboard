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
  {href: "/", label: "Dashboard", icon: House},
  {href: "/customers", label: "Customers", icon: Users},
  {href: "/orders", label: "Orders", icon: Package},
  {href: "/products", label: "Products", icon: Shirt},
  {href: "/team", label: "Team", icon: Component},
];
export default function menuLinks({isOpen}: {isOpen: boolean}) {
  const pathname = usePathname();
  const linkVariants = {
    active: {
      backgroundColor: "#2463EB",
      color: "#fff",
      scale: 1.05,
    },
    inactive: {
      backgroundColor: "transparent",
      color: "inherit",
      scale: 1,
    },
  };
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
                    <motion.div
                      className="flex gap-4 items-center py-1 rounded-md px-4"
                      animate={isActive ? "active" : "inactive"}
                      variants={linkVariants}
                      transition={{duration: 0.3}}>
                      <Icon size={23} className="mb-1" />
                      <span className={`max-md:hidden ${isOpen && "hidden"}`}>
                        {label}
                      </span>
                    </motion.div>
                  </Link>
                </TooltipTrigger>
                {isOpen && (
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
}
