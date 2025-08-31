import Image from "next/image"
import { CardInterface } from "@/utils/interfaces"

interface CardProps {
  cardData: CardInterface
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div key={cardData.id} className="h-[30rem] md:h-[40rem] w-full md:w-full relative">
      <div className="relative w-full h-[30rem] md:h-[40rem] rounded-xl overflow-hidden">
        <Image
          src={cardData.imageUrl}
          alt={cardData.title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-end">
        <h2 className="text-white font-medium text-2xl p-4 text-start">{cardData.title}</h2>
      </div>
    </div>
  )
}

export default Card
