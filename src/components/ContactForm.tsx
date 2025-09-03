"use client";

import { useForm, ValidationError } from "@formspree/react";
import {
  ContactFormInterface,
  ContactFormFieldInterface,
} from "@/utils/interfaces";
import { ContactFormButton, Input, Textarea, Label } from "./atoms";

interface ContactFormProps {
  contactFormData: ContactFormInterface;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactFormData }) => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_API_KEY as string
  );

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold">{contactFormData.message}</p>
    );
  }

  return (
    <form
      className="md:grid md:grid-cols-2 md:grid-rows-4 flex flex-col gap-6 w-[20rem] md:w-full"
      onSubmit={handleSubmit}
    >
      {contactFormData.form.map((field: ContactFormFieldInterface) => (
        <div
          key={field.id}
          className={
            field.isTextarea
              ? "flex flex-col gap-2 md:col-span-2 md:row-span-2"
              : "flex flex-col gap-2"
          }
        >
          <Label id={field.id} labelData={field} />
          {field.isTextarea ? (
            <Textarea id={field.id} textareaData={field} />
          ) : (
            <Input id={field.id} inputData={field} />
          )}
          <ValidationError
            prefix={field.label}
            field={field.name}
            errors={state.errors}
          />
        </div>
      ))}
      <ContactFormButton contactFormButtonData={contactFormData.submitButton} />
    </form>
  );
};

export default ContactForm;
