import { MenuButtonInterface } from "./menuButtonInterface";

export interface MainBoardInterface {
  header: string;
  title: string;
  rating: number;
  imageUrl: string;
  altText: string;
  address: string;
  menuButtons: MenuButtonInterface[];
}
