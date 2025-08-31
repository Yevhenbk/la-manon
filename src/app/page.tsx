import { NextPage } from "next";
import { 
  MainBoard, Navbar, NestedCards, Footer, Schedule, LabelCardList, 
  FormWrapper} from "@/components";
import { 
  navbarData, mainBoardData, footerData, cardData, scheduleData, labelCardData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    // <Footer footerData={footerData}>
    //   <Navbar navbarData={navbarData} />
    //   <MainBoard mainBoardData={mainBoardData} />
    //   <NestedCards cardData={cardData} />
    //   <Schedule scheduleData={scheduleData} />
    // </Footer>
    <div>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />
      <LabelCardList labelCardData={labelCardData} />
      <NestedCards cardData={cardData} />
      <FormWrapper />
    </div>
  );
};

export default Home;
