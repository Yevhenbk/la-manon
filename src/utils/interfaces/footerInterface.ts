export interface FooterInterface {
  copyright: string;
  imageUrl: string;
  footerItems: FooterItemInterface[];
}

export interface FooterItemInterface {
  id: number;
  label: string;
  icon: React.ReactNode | React.JSX.Element;
}
