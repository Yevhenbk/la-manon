import { FooterInterface, FooterItemInterface } from "@/utils/interfaces"

interface FooterProps {
  footerData: FooterInterface,
  children: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({ footerData, children }) => {
  return (
    <footer>
      <div className="related top-0 left-0 w-full h-10 bg-[#e9d8a6] flex justify-around items-center">
        {footerData.footerItems.map((item: FooterItemInterface) => (
          <div key={item.id} className="flex items-center justify-center w-[100px] md:w-[252px]">
            {item.icon}
            <span className="ml-2 font-playfair text-xs font-semibold truncate overflow-hidden whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
      <main className="flex flex-col items-center">
        {children}
      </main>
      <div className="related bottom-0 left-0 w-full h-32 md:h-40 bg-black flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-around items-center">
        <img src={footerData.imageUrl} alt="Logo" className="h-12 md:h-20 object-contain" />
        <span className="font-playfair font-semibold text-xs md:text-sm text-white">{footerData.copyright}</span>
      </div>
    </footer>
  )
}

export default Footer
