import { NextPage } from "next";
import { 
  MainBoard, Navbar, NestedCards, Footer 
} from "@/components";
import { 
  navbarData, mainBoardData, footerData, cardData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <Footer footerData={footerData}>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />
      <NestedCards cardData={cardData} />
    </Footer>
  );
};

export default Home;
