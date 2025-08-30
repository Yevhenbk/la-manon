import Image from "next/image"
import { CardInterface } from "@/utils/interfaces"

interface CardProps {
  cardData: CardInterface
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div key={cardData.id} className="h-[30rem] w-[22vw] h-full relative">
      <div className="relative w-full h-[26rem]">
        <Image
          src={cardData.imageUrl}
          alt={cardData.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <h2>{cardData.title}</h2>
    </div>
  )
}

export default Card
