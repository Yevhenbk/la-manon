import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FormWrapperInterface } from "@/utils/interfaces/organisms";

export const formWrapperData: FormWrapperInterface = {
  header: "Contacta con Nosotros",
  subheader:
    "Ven a conocernos y déjate sorprender por el aroma de nuestro café y la frescura de nuestra bollería artesanal.",
  icons: [
    { component: FaPhoneAlt, title: "+34 912 40 12 83" },
    { component: IoMdMail, title: "lamanon.sagasta.ia@gmail.com" },
    {
      component: IoLocation,
      title: "C. de Sagasta, 5, Chamberí, 28004 Madrid",
    },
  ],
};
