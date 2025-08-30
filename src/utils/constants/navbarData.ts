import { NavbarInterface } from "../interfaces";

export const navbarData: NavbarInterface = {
  imageUrl: "/lamanon_logo.svg",
  href: "/",
  altText: "Logo",
  items: {
    main: [
      { label: "Contacto", href: "/contact", altText: "Contact page" },
      { label: "Política de Privacidad", href: "/privacy-policy", altText: "Privacy Policy page" },
      { label: "Reseñas", href: "/reviews", altText: "Reviews page" },
      { label: "Ubicación", href: "/about", altText: "About Us page" },
    ],
  },
};
