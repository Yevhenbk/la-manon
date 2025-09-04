import { FooterInterface, FooterItemInterface } from "@/utils/interfaces";

export const footerItems: FooterItemInterface[] = [
    {
      id: 1,
      label: "C. de Sagasta, 5, Chamberí, 28004 Madrid",
    },
    {
      id: 2,
      label: "lamanon.sagasta.ia@gmail.com",
    },
    {
      id: 3,
      label: "+34 912 40 12 83",
    }
  ];

export const footerData: FooterInterface = {
  copyright: "© 2025 La Manon. Todos los derechos reservados.",
  imageUrl: "/lamanon_logo.svg",
  footerItems: footerItems
};
