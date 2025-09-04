import { ProductCard } from "../molecules";
import { ProductCardInterface } from "@/utils/interfaces/molecules";
import { ProductCardListInterface } from "@/utils/interfaces/organisms";

interface ProductCardListProps {
  productCardListData: ProductCardListInterface;
  productCardData: ProductCardInterface[];
}

const ProductCardList: React.FC<ProductCardListProps> = ({
  productCardListData,
  productCardData,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-1">
      <div
        className="flex flex-col md:flex-row text-secondary w-full 
      font-medium py-20 items-center md:items-start md:justify-around
      gap-8"
      >
        <h2 className="text-3xl xl:text-5xl w-[20rem]">
          {productCardListData.header}
        </h2>
        <p className="text-xs md:text-sm xl:text-lg w-[20rem] md:w-[25rem]">
          {productCardListData.subheader}
        </p>
      </div>
      <div className="w-full md:w-[50vw] grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-1 md:mt-10 md:px-0">
        {productCardData.map((card: ProductCardInterface) => (
          <ProductCard key={card.id} productCardData={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
