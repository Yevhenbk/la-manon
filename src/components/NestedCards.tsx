import Card from "./Card"
import { CardInterface } from "@/utils/interfaces"

interface NestedCardsProps {
  cardData: CardInterface[]
}

const NestedCards: React.FC<NestedCardsProps> = ({ cardData }) => {
  return (
    <div className="w-full md:w-[70vw] flex justify-between items-center my-10 px-4 md:px-0">
        {cardData.map((card: CardInterface) => (
          <Card key={card.id} cardData={card} />
        ))}
    </div>
  )
}

export default NestedCards
