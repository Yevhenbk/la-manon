import { NavbarInterface } from "../interfaces";

export const navbarData: NavbarInterface = {
  imageUrl: "/lamanon_logo.svg",
  href: "/",
  altText: "Logo",
  items: {
    main: [
      { id: 1, label: "Contacto", href: "/contact", altText: "Contact page" },
      { id: 2, label: "Política de Privacidad", href: "/privacy-policy", altText: "Privacy Policy page" },
      { id: 3, label: "Reseñas", href: "/reviews", altText: "Reviews page" },
      { id: 4, label: "Ubicación", href: "/about", altText: "About Us page" },
    ],
  },
};
