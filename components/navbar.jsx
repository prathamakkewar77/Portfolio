"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
  IconCode,
  IconAdjustmentsX,
  IconHistory,
  IconRectangleVertical,
  IconContract,
  IconBrandGmail,
  Icon12Hours,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import Image from "next/image";


export function FloatingDockDemo() {
  
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconCode className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "/About",
    },
    {
        title: "Skills",
        icon: (
          <IconDeviceLaptop className="h-full w-full text-gray-800" /> // Changed to darker color
        ),
        href: "/skill",
      },

   
   
    {
      title: "Projects",
      icon: (
        <IconRectangleVertical className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "/project",
    },
    {
      title: "Contact",
      icon: (
        <IconBrandGmail className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "/contact",
    },
   

    {
      title: "Linkdin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "https://www.linkedin.com/in/prathamakkewar77/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-gray-800" /> // Changed to darker color
      ),
      href: "https://github.com/prathamakkewar77",
    },
  ];
  return (
    <div className="fixed z-10   left-10 bottom-5 md:left-1/2 transform -translate-x-1/2 -w-auto bg-transparent"> 
      <FloatingDock
         
        items={links} />
    </div>
  );
}
