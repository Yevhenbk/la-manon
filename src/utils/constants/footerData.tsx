import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FooterInterface, FooterItemInterface } from "../interfaces";

export const footerItems: FooterItemInterface[] = [
    {
      id: 1,
      label: "C. de Sagasta, 5, Chamberí, 28004 Madrid",
      icon: <IoLocationSharp />,
    },
    {
      id: 2,
      label: "info@lamanon.com",
      icon: <IoMailSharp />,
    },
    {
      id: 3,
      label: "+34 912 40 12 83",
      icon: <MdLocalPhone />,
    }
  ];

export const footerData: FooterInterface = {
  copyright: "© 2025 La Manon. Todos los derechos reservados.",
  imageUrl: "/lamanon_logo.svg",
  footerItems: footerItems
};
