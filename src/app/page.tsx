import { NextPage } from "next";
import { 
  MainBoard, Navbar, Card, Footer 
} from "@/components";
import { 
  navbarData, mainBoardData, footerData, cardData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <Footer footerData={footerData}>
      <Navbar navbarData={navbarData} />
      <MainBoard mainBoardData={mainBoardData} />
      <div className="w-full md:w-[70vw] flex justify-between items-center my-10 px-4 md:px-0">
        {cardData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
    </div>
    </Footer>
  );
};

export default Home;
