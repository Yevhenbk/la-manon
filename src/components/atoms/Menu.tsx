"use client";

import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div className="flex items-center gap-4 z-[999]">
      <div className="lg:hidden block">
        <IoIosMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>
      <div
        className={`fixed inset-0 bg-white bg-opacity-0 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end h-dvh">
          <div
            className="bg-white p-4 rounded-lg w-dvw flex flex-col justify-center items-center
          gap-8"
          >
            <IoCloseSharp
              className="text-3xl absolute top-8 right-6 hover:cursor-pointer text-tertiary"
              onClick={toggleMenu}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
