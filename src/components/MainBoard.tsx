import Image from "next/image";
import { MainBoardInterface, MenuButtonInterface } from "@/utils/interfaces";
import MenuButton from "./MenuButton";

interface MainBoardProps {
  mainBoardData: MainBoardInterface
}

const MainBoard: React.FC<MainBoardProps> = ({ mainBoardData }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full md:w-[70vw] h-[20rem] md:h-[45rem] flex flex-col justify-center items-center overflow-hidden">
        <Image src={mainBoardData.imageUrl} alt={mainBoardData.altText} fill className="object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 gap-4 md:gap-8">
          <div className="flex space-x-2 justify-center items-center ">
            {[...Array(mainBoardData.rating)].map((_, i) => (
              <svg key={i} width="24" height="24" fill="#e9d8a6" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <h2 className="font-playfair text-center italic text-white text-sm md:text-2xl w-[20rem] md:w-[40rem] font-semibold">&ldquo;{mainBoardData.title}&rdquo;</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 md:pt-4 md:pt-8">
            {mainBoardData.menuButtons.map((buttonData: MenuButtonInterface) => (
              <MenuButton key={buttonData.id} buttonData={buttonData} />
            ))}
          </div>
      </div>
    </div>
  </div>
  )
}

export default MainBoard
