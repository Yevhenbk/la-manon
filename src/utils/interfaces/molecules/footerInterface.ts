export interface FooterInterface {
  copyright: string;
  imageUrl: string;
  footerItems: FooterItemInterface[];
}

export interface FooterItemInterface {
  id: number;
  label: string;
  type?: "phone" | "email" | "address";
}
