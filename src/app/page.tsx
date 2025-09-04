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
  labelCardData,
  productCardData,
  footerData,
  contactFormData,
} from "@/utils/constants/molecules";
import {
  formWrapperData,
  productCardListData,
  mainBoardData,
} from "@/utils/constants/organisms";

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
