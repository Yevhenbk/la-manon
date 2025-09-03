import { NextPage } from "next";
import { MainBoard, Navbar, Footer, LabelCardList } from "@/components";
import { FormWrapper, ProductCardList } from "@/components/organisms";
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
