import { FC } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IoLocation } from "react-icons/io5"
import ContactForm from "./ContactForm"
import { IconType } from "react-icons"

interface IconsProps {
  component: IconType,
  title: string
}

const icons: IconsProps[] = [
  { component: FaPhoneAlt, title: "+34 912 40 12 83" },
  { component: IoMdMail, title: "lamanon@gmail.com" },
  { component: IoLocation, title: "C. de Sagasta, 5, Chamberí, 28004 Madrid" },
]

const FormWrapper: FC = () => {
  return (
    <div className="flex flex-col text-secondary
    font-medium my-32 gap-8 w-full md:w-[50vw] relative
    md:left-[10vw] items-center md:items-start">
      <div className="flex flex-col gap-8 text-start w-[20rem] md:w-[25rem]">
       <h2 className="text-3xl xl:text-5xl">
          Contacta con Nosotros
        </h2>
        <p className="text-xs md:text-sm xl:text-lg">
          Ven a conocernos y déjate sorprender por el aroma de nuestro café y la frescura de nuestra 
          bollería artesanal.
        </p>
        <div className="flex flex-col gap-4 items-start">
          {icons.map((
            {
              component: IconComponent,
              title
            },
            index: number
          ) => (
            <div 
              key={index}  
              className="flex flex-row items-center gap-2"
            >
              <IconComponent className="text-sm" />
              <p className="text-sm">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default FormWrapper