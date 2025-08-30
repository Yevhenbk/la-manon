import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export const metadata: Metadata = {
  title: "La Manon",
  description: "La Manon – Boulangerie & Bistro | Panaderías Pastelerías Cafeterías Delicatesen | Franquicia",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
