import { NextPage } from "next";
import { 
  MainBoard, Navbar, Card, Footer 
} from "@/components";
import { navbarData, mainBoardData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <main className="">
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />

      {/* <Card /> */}
      <Footer />
    </main>
  );
};

export default Home;
