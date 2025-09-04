import { LabelFieldInterface } from "@/utils/interfaces/molecules";

interface LabelProps {
  id: string;
  labelData: LabelFieldInterface;
}

const Label: React.FC<LabelProps> = ({ id, labelData }) => {
  return (
    <label className="text-sm md:text-lg" htmlFor={id}>
      {labelData.label}
    </label>
  );
};

export default Label;
