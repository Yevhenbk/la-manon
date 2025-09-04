import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { MainBoardInterface } from "@/utils/interfaces/organisms";
import { MenuButtonInterface } from "@/utils/interfaces/atoms/menuButtonInterface";
import MenuButton from "../atoms/MenuButton";

interface MainBoardProps {
  mainBoardData: MainBoardInterface;
}

const MainBoard: React.FC<MainBoardProps> = ({ mainBoardData }) => {
  return (
    <div
      className="flex flex-col w-vw h-[100dvh]
    overflow-hidden md:flex-row-reverse relative"
    >
      <div
        className="relative h-[40dvh] md:h-[100dvh]
      w-auto md:w-[60vw]"
      >
        <div
          className="mouse absolute right-4 bottom-4 z-30
        xl:bottom-8 xl:right-8"
        >
          <div className="mouse-move" />
        </div>
        <Image
          className="object-cover h-[40dvh] 
          md:h-[100dvh] w-auto md:w-[60vw] border-4
          border-white rounded-2xl
          xl:rounded-3xl"
          src={mainBoardData.imageUrl}
          alt={mainBoardData.altText}
          fill
          priority={true}
        />
        <h1
          className="text-4xl md:text-6xl xl:text-9xl 
        font-normal absolute text-white bottom-4 
        xl:bottom-8 left-4 xl:left-8 w-[290px]"
        >
          {mainBoardData.header}
        </h1>
      </div>
      <div
        className="flex flex-col justify-between
      py-12 xl:py-32 px-6 xl:px-12 md:pt-32 xl:pt-60 md:py-20 
      h-[60dvh] md:h-dvh md:w-[40vw] text-secondary"
      >
        <h5 className="font-medium text-sm xl:text-xl">
          &ldquo;{mainBoardData.title}&rdquo;
        </h5>
        <div className="md:flex space-x-2 justify-start items-center hidden">
          {[...Array(mainBoardData.rating)].map((_, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              fill="var(--color-secondary)"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <div className="flex flex-col items-start gap-2 md:pt-4 md:pt-8">
          {mainBoardData.menuButtons.map(
            (menuButtonData: MenuButtonInterface) => (
              <MenuButton
                key={menuButtonData.id}
                menuButtonData={menuButtonData}
              />
            )
          )}
        </div>
        <div className="flex gap-2 justify-start items-center">
          <IoLocation className="text-xl" />
          <p className="font-medium text-sm xl:text-xl">
            {mainBoardData.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
