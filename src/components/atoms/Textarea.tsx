import { InputFieldInterface } from "@/utils/interfaces/molecules";

interface TextareaProps {
  id: string;
  textareaData: InputFieldInterface;
}

const Textarea: React.FC<TextareaProps> = ({ id, textareaData }) => {
  return (
    <textarea
      id={id}
      name={textareaData.name}
      className="rounded-md border-2 border-secondary p-2 text-sm h-32 md:h-full outline-none"
      required={textareaData.required}
      autoComplete="on"
    />
  );
};

export default Textarea;
