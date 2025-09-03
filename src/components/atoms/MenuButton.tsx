import Link from "next/link";
import { MenuButtonInterface } from "@/utils/interfaces";

interface MenuButtonProps {
  menuButtonData: MenuButtonInterface;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menuButtonData }) => {
  return (
    <Link href={menuButtonData.link} className="text-sm md:text-lg bg-primary text-black transition-all
    rounded-full border border-white m-0 py-3 px-3 md:px-5 flex justify-center items-center font-semibold w-[160px] md:w-[220px]
    hover:bg-tertiary">
      <span>
        {menuButtonData.label}
      </span>
    </Link>
  )
}

export default MenuButton
