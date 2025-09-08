import { FooterInterface, FooterItemInterface } from "@/utils/interfaces/molecules";

export const footerItems: FooterItemInterface[] = [
    {
      id: 1,
      label: "C. de Sagasta, 5, Chamberí, 28004 Madrid",
      type: "address"
    },
    {
      id: 2,
      label: "lamanon.sagasta.ia@gmail.com",
      type: "email"
    },
    {
      id: 3,
      label: "+34 912 40 12 83",
      type: "phone"
    }
  ];

export const footerData: FooterInterface = {
  copyright: "© 2025 La Manon. Todos los derechos reservados.",
  imageUrl: "/lamanon_logo.svg",
  footerItems: footerItems
};
