import Image from "next/image";
import { FooterInterface, FooterItemInterface } from "@/utils/interfaces/molecules";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FooterProps {
  footerData: FooterInterface;
}

const iconMap: Record<string, React.JSX.Element> = {
  phone: <FaPhone className="inline mr-1" />,
  email: <FaEnvelope className="inline mr-1" />,
  address: <FaMapMarkerAlt className="inline mr-1" />,
};

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className="w-full">
      <div className="w-full flex justify-center items-center py-8 bg-black">
        <div className="relative h-20 w-40">
          <Image
            src={footerData.imageUrl}
            alt="Logo"
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
      </div>
      <div
        className="w-full bg-tertiary flex flex-col-reverse md:flex-row justify-around items-center text-black font-medium 
      py-8 md:py-4 gap-12 md:gap-0"
      >
        <span className="text-sm px-8 text-center md:px-0">
          {footerData.copyright}
        </span>
        <div className="flex flex-col md:flex-row gap-4">
          {footerData.footerItems.map((item: FooterItemInterface) => (
            <span key={item.id} className="text-xs flex items-center gap-1">
              {item.type && iconMap[item.type]}
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;