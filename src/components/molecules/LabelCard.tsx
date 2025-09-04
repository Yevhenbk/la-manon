import classNames from "classnames";
import { LabelCardInterface } from "@/utils/interfaces/molecules";

interface LabelCardProps {
  labelCardData: LabelCardInterface;
}

const LabelCard: React.FC<LabelCardProps> = ({ labelCardData }) => {
  return (
    <div
      key={labelCardData.id}
      className={classNames(
        `text-black 
    flex flex-col p-8 xl:p-16 items-start justify-between 
    gap-8 rounded-xl flex-1`,
        {
          "bg-primary": labelCardData.background === "dark",
          "bg-tertiary": labelCardData.background === "light",
        }
      )}
    >
      <p
        className="text-4xl md:text-5xl xl:text-7xl 
      font-medium"
      >
        {labelCardData.title}
      </p>
      <p className="text-xl xl:text-2xl font-medium">{labelCardData.label}</p>
    </div>
  );
};

export default LabelCard;
