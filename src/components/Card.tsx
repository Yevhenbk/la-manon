import Image from "next/image"
import { CardInterface } from "@/utils/interfaces"

interface CardProps {
  cardData: CardInterface
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div key={cardData.id} className="h-[50vw] md:h-[26rem] w-full md:w-[16vw] h-full relative">
      <div className="relative w-full h-[50vw] md:h-[26rem]">
        <Image
          src={cardData.imageUrl}
          alt={cardData.title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-end">
        <h2 className="text-white font-semibold font-playfair text-sm md:text-xl p-4 text-center">{cardData.title}</h2>
      </div>
    </div>
  )
}

export default Card
