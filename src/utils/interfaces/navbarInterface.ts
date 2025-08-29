export interface NavbarInterface {
  imageUrl: string;
  href: string;
  altText: string;
  items: {
    [key: string]: NavbarItem[];
  };
}

export interface NavbarItem {
  label: string;
  href: string;
  altText: string;
}
