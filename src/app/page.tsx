import { NextPage } from "next";
import { 
  MainBoard, Navbar, Card, Footer 
} from "@/components";
import { navbarData, mainBoardData, footerData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <Footer footerData={footerData}>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />

      {/* <Card /> */}
    </Footer>
  );
};

export default Home;
