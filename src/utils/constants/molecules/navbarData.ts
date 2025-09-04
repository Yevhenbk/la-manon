import { NavbarInterface } from "@/utils/interfaces";

export const navbarData: NavbarInterface = {
  imageUrl: "/lamanon_logo.svg",
  href: "/",
  altText: "Logo",
  items: {
    main: [
      // { id: 1, label: "Contacto", href: "/contact", altText: "Contact page" },
      {
        id: 2,
        label: "Política de Privacidad",
        href: "/privacy-policy",
        altText: "Privacy Policy page",
      },
      {
        id: 3,
        label: "Reseñas",
        href: "https://www.google.com/search?sca_esv=06f1284d0cc9e0ea&sxsrf=AE3TifPWjODK2hwog0kwU6GIvkFuWNUIKQ:1756687333500&q=la+manon+sagasta&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8vvViYcO6HEhNWdH5Dnu6mLJwW-y3hgaS0lg-TRzBVnvstEnBLy7oAE9iM5weV03a2x_5k%3D&uds=AOm0WdFRPqUD_qV0CCvuvWYUkCS3E0psPC3vkpzMsSYKhqGKDwvFYbZDpLTfTpI1mWIAOfPAQU0kxEE1cXv2HvEplC_pe9m5-q37Qmj5fuikdRAnxBlSfLU&sa=X&ved=2ahUKEwirqPqjqraPAxWvTaQEHf1dBh4Q3PALegQIGhAE&biw=1920&bih=911&dpr=1",
        altText: "Reviews page",
      },
      {
        id: 4,
        label: "Ubicación",
        href: "https://www.google.com/maps/place/La+Manon+Boulangerie+%26+Bistro/@40.4289082,-3.7010285,17z/data=!3m1!4b1!4m6!3m5!1s0xd42288a307af3e1:0x5b5f577b525cbc1f!8m2!3d40.4289082!4d-3.7010285!16s%2Fg%2F11bx5pkh1k?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
        altText: "About Us page",
      },
    ],
  },
};
