import Image from "next/image";
import { NavbarInterface, NavbarItem } from "@/utils/interfaces";

interface NavbarProps {
  navbarData: NavbarInterface;
}

const Navbar: React.FC<NavbarProps> = ({ navbarData }) => {
  return (
    <nav className="flex flex-col w-full justify-center items-center">
      <div className="py-8 w-full h-[8rem] md:h-[10rem] bg-black flex justify-center items-center">
        <div className="relative w-[20rem] h-[4rem] md:h-[6rem] w-full">
          <Image
            src={navbarData.imageUrl}
            alt={navbarData.altText}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <ul className="flex flex-row justify-around md:justify-center md:space-x-20 py-4 w-full md:w-[70vw] overflow-x-hidden">
        {navbarData.items.main.map((item: NavbarItem) => (
          <li key={item.label} className="text-sm md:text-lg uppercase font-bebas max-w-[6rem] overflow-hidden text-ellipsis whitespace-nowrap">
            <a href={item.href} aria-label={item.altText}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
