import { NextPage } from "next";
import { MainBoard, Footer } from "@/components";
import { FormWrapper, ProductCardList, LabelCardList } from "@/components/organisms";
import { Navbar,  } from "@/components/molecules";
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
