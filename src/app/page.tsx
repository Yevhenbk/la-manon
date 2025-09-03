import { NextPage } from "next";
import {
  FormWrapper,
  ProductCardList,
  LabelCardList,
  MainBoard,
} from "@/components/organisms";
import { Navbar, Footer } from "@/components/molecules";
import {
  navbarData,
  mainBoardData,
  footerData,
  productCardData,
  labelCardData,
  contactFormData,
  formWrapperData,
  productCardListData,
} from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />
      <LabelCardList labelCardData={labelCardData} />
      <ProductCardList
        productCardListData={productCardListData}
        productCardData={productCardData}
      />
      <FormWrapper
        formWrapperData={formWrapperData}
        contactFormData={contactFormData}
      />
      <Footer footerData={footerData} />
    </div>
  );
};

export default Home;
