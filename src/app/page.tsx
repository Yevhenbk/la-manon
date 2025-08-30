import { NextPage } from "next";
import { 
  MainBoard, Navbar, NestedCards, Footer, Schedule } from "@/components";
import { 
  navbarData, mainBoardData, footerData, cardData, scheduleData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    // <Footer footerData={footerData}>
    //   <Navbar navbarData={navbarData} />
    //   <MainBoard mainBoardData={mainBoardData} />
    //   <NestedCards cardData={cardData} />
    //   <Schedule scheduleData={scheduleData} />
    // </Footer>
    <div>
      <MainBoard mainBoardData={mainBoardData} />
    </div>
  );
};

export default Home;
