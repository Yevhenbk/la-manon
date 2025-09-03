import { LabelFieldInterface } from "@/utils/interfaces";

interface LabelProps {
  id: string;
  labelData: LabelFieldInterface;
}

const Label: React.FC<LabelProps> = ({ id, labelData }) => {
  return (
    <label className="text-sm" htmlFor={id}>
      {labelData.label}
    </label>
  );
};

export default Label;
