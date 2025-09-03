"use client"

import { useForm, ValidationError } from "@formspree/react"
import { 
  ContactFormInterface, ContactFormFieldInterface, ContactFormSubmitButtonInterface } from "@/utils/interfaces"
import { contactFormData } from "@/utils/constants"
import { ContactFormButton, Input, Textarea } from "./atoms"

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mjkerndb");

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">¡Gracias por tu mensaje!</p>;
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
          <label className="text-sm" htmlFor={field.id}>
            {field.label}
          </label>
          {field.isTextarea ? (
            <Textarea id={field.id} textareaData={field} />
          ) : (
            <Input id={field.id} inputData={field} />
          )}
          <ValidationError prefix={field.label} field={field.name} errors={state.errors} />
        </div>
      ))}
      <ContactFormButton
        contactFormButtonData={contactFormData.submitButton}
      />
    </form>
  )
}

export default ContactForm