"use client";

import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="flex items-center gap-4 z-[999]">
      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden block"
      >
        <IoIosMenu className="text-3xl" aria-hidden="true" />
      </button>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative bg-white p-4 w-dvw h-dvh flex flex-col justify-center items-center gap-8">
          <button
            type="button"
            className="absolute top-8 right-6"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoCloseSharp className="text-3xl text-tertiary" aria-hidden="true" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;