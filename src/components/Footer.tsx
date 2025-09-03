import { FooterInterface, FooterItemInterface } from "@/utils/interfaces"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

interface FooterProps {
  footerData: FooterInterface,
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className="w-full">
      <div className="w-full flex justify-center items-center py-8 bg-black">
        <img src={footerData.imageUrl} alt="Logo" className="h-[4rem] md:h-20 object-contain" />
      </div>
      <div className="w-full bg-tertiary flex flex-col-reverse md:flex-row justify-around items-center text-black font-medium 
      py-8 md:py-4 gap-12 md:gap-0">
        <span className="text-sm px-8 text-center md:px-0">
          {footerData.copyright}
        </span>
        <div className="flex flex-col md:flex-row gap-4">
          {footerData.footerItems.map((item: FooterItemInterface) => {
            let icon = null;
            if (item.label.includes("@")) icon = <FaEnvelope className="inline mr-1" />;
            else if (/\+?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{2,3}/.test(item.label) || /\d{9}/.test(item.label)) icon = <FaPhone className="inline mr-1" />;
            else if (item.label.toLowerCase().includes("madrid") || item.label.toLowerCase().includes("chamberí")) icon = <FaMapMarkerAlt className="inline mr-1" />;
            return (
              <span key={item.id} className="text-xs flex items-center gap-1">{icon}{item.label}</span>
            );
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
