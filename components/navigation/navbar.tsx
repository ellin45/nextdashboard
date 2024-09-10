"use client"
import React from "react";
import Logo from "./logo";
import MenuToggle from "./menu-toggle";
import {ModeToggle} from "./mode-toggle";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useEffect, useState} from "react";
import useRouteCheck from "@/hooks/useRouteCheck";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const loginRoute = useRouteCheck(["login"]);
  const registerRoute = useRouteCheck(["register"]);
  const onboardingRoute = useRouteCheck(["onboarding"]);
  // if(loginRoute || registerRoute) return ;
  useEffect(() => {
    if (!loginRoute && registerRoute && onboardingRoute) {
      setLoading(false);
    }
  }, [loginRoute, registerRoute, onboardingRoute]);

  if (loading || loginRoute || registerRoute || onboardingRoute) return null;
  return (
    <div className="py-4 border-b">
      <div className="md:w-[95%] w-[92%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Logo />
          <MenuToggle />
        </div>
        <div className="flex gap-8 items-center">
          <ModeToggle />
          <span className="max-md:hidden">Welcome Back Ellin</span>
          <Avatar>
            <AvatarImage src="avatar-image.avif" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
