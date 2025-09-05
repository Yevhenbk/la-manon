import Image from "next/image";
import { ProductCardInterface } from "@/utils/interfaces/molecules";

interface ProductCardProps {
  productCardData: ProductCardInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ productCardData }) => {
  return (
    <div
      key={productCardData.id}
      className="h-[30rem] md:h-[40rem] w-full md:w-full relative"
    >
      <div className="relative w-full h-[30rem] md:h-[40rem] rounded-xl overflow-hidden">
        <Image
          src={productCardData.imageUrl}
          alt={productCardData.title}
          fill
          placeholder="blur"
          blurDataURL={productCardData.blurDataURL}
          sizes="w-full h-full"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-end">
        <h2 className="text-white font-medium text-2xl md:text-3xl p-4 text-start">
          {productCardData.title}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
