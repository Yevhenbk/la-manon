"use client"

import { FC } from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm: FC = () => {
  const [state, handleSubmit] = useForm("mjkerndb"); // Use your Formspree form ID

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
      <div className={wrapper}>
        <label className={label} htmlFor="firstName">
          Nombre *
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          className={input}
          required
        />
        <ValidationError prefix="Nombre" field="firstName" errors={state.errors} />
      </div>
      <div className={wrapper}>
        <label className={label} htmlFor="lastName">
          Apellido *
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          className={input}
          required
        />
        <ValidationError prefix="Apellido" field="lastName" errors={state.errors} />
      </div>
      <div className={wrapper}>
        <label className={label} htmlFor="phone">
          Teléfono *
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          className={input}
          required
        />
        <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
      </div>
      <div className={wrapper}>
        <label className={label} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={input}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={textareaWrapper}>
        <label className={label} htmlFor="consultation">
          Mensaje *
        </label>
        <textarea
          id="consultation"
          name="consultation"
          className={textarea}
          required
        />
        <ValidationError prefix="Mensaje" field="consultation" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="text-sm md:text-lg bg-primary text-black transition-all
        rounded-full border border-white m-0 py-3 px-3 md:px-5 flex justify-center items-center font-semibold w-[160px] md:w-[220px]
        hover:bg-tertiary hover:cursor-pointer"
      >
        Enviar
      </button>
    </form>
  )
}

export default ContactForm