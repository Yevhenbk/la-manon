import { NextPage } from "next";
import { 
  MainBoard, Navbar, NestedCards, Footer, LabelCardList, 
  FormWrapper} from "@/components";
import { 
  navbarData, mainBoardData, footerData, cardData, labelCardData, contactFormData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />
      <LabelCardList labelCardData={labelCardData} />
      <NestedCards cardData={cardData} />
      <FormWrapper />
      <Footer footerData={footerData} />
    </div>
  );
};

export default Home;
