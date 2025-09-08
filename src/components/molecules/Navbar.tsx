"use client"

import { useState, useEffect } from "react";
import Menu from "../atoms/Menu";
import Image from "next/image";
import Link from "next/link";
import { NavbarInterface, NavbarItem } from "@/utils/interfaces/molecules";

interface NavbarProps {
  navbarData: NavbarInterface;
}

const Navbar: React.FC<NavbarProps> = ({ navbarData }) => {
  const [colors, setColors] = useState({
    bg: "transparent",
    text: "var(--background)"
  });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setColors({ bg: "black", text: "var(--background)" });
    } else {
      setColors({ bg: "transparent", text: "var(--background)" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-20 w-full flex justify-between items-center fixed z-[999] font-medium px-4`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {colors.bg !== "transparent" && (
        <div className="relative w-[8rem] h-[2rem] md:h-[3rem] md:ml-6">
          <Image
            src={navbarData.imageUrl}
            alt={navbarData.altText}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className="flex items-center gap-4 ml-auto">
        <Menu>
          {navbarData.items.main.map((item: NavbarItem) => (
            <Link key={item.id} href={item.href} target="_blank" rel="noopener noreferrer">
              <p className="text-sm xl:text-base 2xl:text-lg text-tertiary">
                {item.label}
              </p>
            </Link>
          ))}
        </Menu>
        <div className="hidden lg:flex justify-center gap-12 pr-20">
          {navbarData.items.main.map((item: NavbarItem) => (
            <Link key={item.id} href={item.href} target="_blank" rel="noopener noreferrer">
              <p className="text-sm xl:text-base 2xl:text-lg">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;