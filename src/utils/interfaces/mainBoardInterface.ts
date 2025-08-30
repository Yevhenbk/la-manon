import { MenuButtonInterface } from "./menuButtonInterface";

export interface MainBoardInterface {
  title: string;
  rating: number;
  imageUrl: string;
  altText: string;
  menuButtons: MenuButtonInterface[];
}
