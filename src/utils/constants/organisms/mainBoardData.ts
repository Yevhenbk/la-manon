import { MainBoardInterface } from "@/utils/interfaces/organisms";
import { menuButtonData } from "../atoms";

export const mainBoardData: MainBoardInterface = {
  header: "Boulangerie & Bistro",
  title:
    "La mejor selección de café y té en tu taza, saboreando nuestro café galardonado con la medalla de oro a nivel europeo.",
  rating: 5,
  imageUrl: "/main_image.jpg",
  altText: "La Manon Sagasta 5",
  address: "C. de Sagasta, 5, Chamberí, 28004 Madrid",
  menuButtons: menuButtonData,
  blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
};
