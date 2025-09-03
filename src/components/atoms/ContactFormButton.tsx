import { ContactFormSubmitButtonInterface } from "@/utils/interfaces";

interface ContactFormButtonProps {
  onClick?: () => void;
  contactFormButtonData: ContactFormSubmitButtonInterface;
}

const ContactFormButton: React.FC<ContactFormButtonProps> = ({
  onClick,
  contactFormButtonData,
}) => {
  return (
    <button
      type={contactFormButtonData.type}
      onClick={onClick}
      disabled={contactFormButtonData.disabled}
      className="text-sm md:text-lg bg-primary text-black transition-all
        rounded-full border border-white m-0 py-3 px-3 md:px-5 flex justify-center items-center font-semibold w-[160px] md:w-[220px]
        hover:bg-tertiary hover:cursor-pointer"
    >
      {contactFormButtonData.label}
    </button>
  );
};

export default ContactFormButton;
