import { IconType } from "react-icons";

export interface IconsProps {
  component: IconType,
  title: string
}

export interface FormWrapperInterface {
  header: string;
  subheader: string;
  icons: IconsProps[];
}
