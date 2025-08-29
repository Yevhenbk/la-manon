import { NextPage } from "next";
import { 
  MainBoard, Navbar, Card, Footer 
} from "@/components";
import { navbarData } from "@/utils/constants";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar navbarData={navbarData} />

      <main className="min-h-screen flex flex-col items-center justify-center">
        <MainBoard />
      </main>

      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default Home;
