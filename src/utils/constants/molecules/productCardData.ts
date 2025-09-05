import { ProductCardInterface } from "@/utils/interfaces/molecules";

const defaultBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=";

export const productCardData: ProductCardInterface[] = [
  {
    id: 1,
    title: "Empieza la mañana con la combinación más clásica y reconfortante.",
    imageUrl: "/lamanon_breakfast.png",
    blurDataURL: defaultBlurDataURL,
  },
  {
    id: 2,
    title:
      "La estrella de nuestra casa: croissants horneados con la receta original.",
    imageUrl: "/lamanon_croisant.png",
    blurDataURL: defaultBlurDataURL,
  },
  {
    id: 3,
    title:
      "Disfruta de nuestro café de especialidad preparado por baristas expertos.",
    imageUrl: "/lamanon_coffee.png",
    blurDataURL: defaultBlurDataURL,
  },
  {
    id: 4,
    title:
      "Deléitate con nuestra variedad de bollería recién horneada cada mañana.",
    imageUrl: "/lamanon_bakery.png",
    blurDataURL: defaultBlurDataURL,
  },
];
