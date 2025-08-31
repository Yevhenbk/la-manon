import Card from "./Card"
import { CardInterface } from "@/utils/interfaces"

interface NestedCardsProps {
  cardData: CardInterface[]
}

const NestedCards: React.FC<NestedCardsProps> = ({ cardData }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-1">
      <div className="flex flex-col md:flex-row text-secondary w-full 
      font-medium py-20 items-center md:items-start md:justify-around
      gap-8">
        <h2 className="text-3xl xl:text-5xl w-[20rem]">
          Nuestros Sabores & Especialidades
        </h2>
        <p className="text-xs md:text-sm xl:text-lg w-[20rem] md:w-[25rem]">
          Ya sea un desayuno ligero, un café de media tarde o un dulce capricho, en La Manon 
          siempre encontrarás algo especial. Nuestros productos artesanales y nuestro ambiente 
          acogedor hacen que cada visita sea inolvidable.
        </p>
      </div>
      <div className="w-full md:w-[50vw] grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-1 md:mt-10 md:px-0">
          {cardData.map((card: CardInterface) => (
            <Card key={card.id} cardData={card} />
          ))}
      </div>
    </div>
  )
}

export default NestedCards
