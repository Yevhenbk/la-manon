import ContactForm from "../molecules/ContactForm";
import { FormWrapperInterface, ContactFormInterface } from "@/utils/interfaces";

interface FormWrapperProps {
  formWrapperData: FormWrapperInterface;
  contactFormData: ContactFormInterface;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  formWrapperData,
  contactFormData,
}) => {
  return (
    <div
      className="flex flex-col text-secondary
    font-medium my-32 gap-8 w-full md:w-[50vw] relative
    md:left-[10vw] items-center md:items-start"
    >
      <div className="flex flex-col gap-8 text-start w-[20rem] md:w-[25rem]">
        <h2 className="text-3xl xl:text-5xl">{formWrapperData.header}</h2>
        <p className="text-xs md:text-sm xl:text-lg">
          {formWrapperData.subheader}
        </p>
        <div className="flex flex-col gap-4 items-start">
          {formWrapperData.icons.map(
            ({ component: IconComponent, title }, index: number) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <IconComponent className="text-sm" />
                <p className="text-sm">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
      <ContactForm contactFormData={contactFormData} />
    </div>
  );
};

export default FormWrapper;
