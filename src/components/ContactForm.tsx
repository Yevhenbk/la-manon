"use client"

import { FC, useState } from "react"
import axios from "axios"
import Link from "next/link"

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultation: ""
  })

  const wrapper = "flex flex-col gap-2 "
  const textareaWrapper = "flex flex-col gap-2 md:col-span-2 md:row-span-2"
  const input = "rounded-md border-2 border-secondary p-2 text-sm text-secondary outline-none"
  const textarea = "rounded-md border-2 border-secondary p-2 text-sm h-32 md:h-full outline-none"
  const label = "text-sm"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://formspree.io/f/xqkvvpgv", formData)
      console.log("Form submission successful:", response.data)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        consultation: ""
      })
    } catch (error) {
      console.error("Form submission failed:", error)
    }
  }

  return (
    <form className="md:grid md:grid-cols-2 md:grid-rows-4
    flex flex-col gap-6 w-[20rem] md:w-full" onSubmit={handleSubmit}>
      <div className={wrapper}>
        <label className={label}>
          Nombre *
        </label>
        <input 
          type="text" 
          name="firstName"
          className={input} 
          value={formData.firstName} 
          onChange={handleChange} 
        />
      </div>
      <div className={wrapper}>
        <label className={label}>
          Apellido *
        </label>
        <input 
          type="text" 
          name="lastName"
          className={input} 
          value={formData.lastName} 
          onChange={handleChange} 
        />
      </div>
      <div className={wrapper}>
        <label className={label}>
          Teléfono *
        </label>
        <input 
          type="text" 
          name="phone"
          className={input} 
          value={formData.phone} 
          onChange={handleChange} 
        />
      </div>
      <div className={wrapper}>
        <label className={label}>
          Email *
        </label>
        <input 
          type="text" 
          name="email"
          className={input} 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div className={textareaWrapper}>
        <label className={label}>
          Mensaje *
        </label>
        <textarea
          name="consultation"
          className={textarea}
          value={formData.consultation} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit" className="text-sm md:text-lg bg-primary text-black transition-all
        rounded-full border border-white m-0 py-3 px-3 md:px-5 flex justify-center items-center font-semibold w-[160px] md:w-[220px]
        hover:bg-tertiary hover:cursor-pointer">
        Enviar
      </button>
    </form>
  )
}

export default ContactForm