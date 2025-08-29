import { NavbarInterface } from "../interfaces";

export const navbarData: NavbarInterface = {
  imageUrl: "/lamanon_logo.svg",
  href: "/",
  altText: "Logo",
  items: {
    main: [
      { label: "Contact", href: "/contact", altText: "Contact page" },
      { label: "Privacy Policy", href: "/privacy-policy", altText: "Privacy Policy page" },
      { label: "Reviews", href: "/reviews", altText: "Reviews page" },
      { label: "Location", href: "/about", altText: "About Us page" },
    ],
  },
};
