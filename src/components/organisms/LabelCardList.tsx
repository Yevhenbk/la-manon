import { LabelCardInterface } from "@/utils/interfaces";
import LabelCard from "../molecules/LabelCard";

interface LabelCardListProps {
  labelCardData: LabelCardInterface[];
}

const LabelCardList: React.FC<LabelCardListProps> = ({ labelCardData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 w-full px-1">
      {labelCardData.map((data: LabelCardInterface) => (
        <LabelCard key={data.id} labelCardData={data} />
      ))}
    </div>
  );
};

export default LabelCardList;
