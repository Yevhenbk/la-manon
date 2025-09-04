import { InputFieldInterface } from "@/utils/interfaces/molecules";

interface InputProps {
  id: string;
  inputData: InputFieldInterface;
}

const Input: React.FC<InputProps> = ({ id, inputData }) => {
  return (
    <input
      id={id}
      type={inputData.type}
      name={inputData.name}
      className="rounded-md border-2 border-secondary p-2 text-sm text-secondary outline-none"
      required={inputData.required}
      autoComplete={
        inputData.name === "email"
          ? "email"
          : inputData.name === "firstName"
          ? "given-name"
          : inputData.name === "lastName"
          ? "family-name"
          : inputData.name === "phone"
          ? "tel"
          : "on"
      }
    />
  );
};

export default Input;
