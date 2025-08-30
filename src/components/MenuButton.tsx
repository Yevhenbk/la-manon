import Link from "next/link";
import { MenuButtonInterface } from "@/utils/interfaces";

interface MenuButtonProps {
  buttonData: MenuButtonInterface;
}

const MenuButton: React.FC<MenuButtonProps> = ({ buttonData }) => {
  return (
    <Link href={buttonData.link} className="text-white text-sm md:text-lg font-playfair hover:bg-[#e9d8a6] hover:border-[#e9d8a6] hover:text-black transition-all duration-200 ease-in
    rounded-full border border-white m-0 py-1 md:py-2 px-3 md:px-5 flex justify-center items-center font-semibold w-[135px] md:w-[185px]">
      <span>
        {buttonData.label}
      </span>
    </Link>
  )
}

export default MenuButton
