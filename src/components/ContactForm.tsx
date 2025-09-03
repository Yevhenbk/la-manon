"use client"

import { FC } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { 
  ContactFormInterface, ContactFormFieldInterface, ContactFormSubmitButtonInterface } from "@/utils/interfaces"
import { contactFormData } from "@/utils/constants"
import ContactFormButton from "./atoms/ContactFormButton"

const ContactForm: FC = () => {
  const [state, handleSubmit] = useForm("mjkerndb");

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">¡Gracias por tu mensaje!</p>;
  }

  const wrapper = "flex flex-col gap-2 "
  const textareaWrapper = "flex flex-col gap-2 md:col-span-2 md:row-span-2"
  const input = "rounded-md border-2 border-secondary p-2 text-sm text-secondary outline-none"
  const textarea = "rounded-md border-2 border-secondary p-2 text-sm h-32 md:h-full outline-none"
  const label = "text-sm"

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
            <textarea
              id={field.id}
              name={field.name}
              className="rounded-md border-2 border-secondary p-2 text-sm h-32 md:h-full outline-none"
              required={field.required}
              autoComplete="on"
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              name={field.name}
              className="rounded-md border-2 border-secondary p-2 text-sm text-secondary outline-none"
              required={field.required}
              autoComplete={
                field.name === "email" ? "email" :
                field.name === "firstName" ? "given-name" :
                field.name === "lastName" ? "family-name" :
                field.name === "phone" ? "tel" :
                "on"
              }
            />
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