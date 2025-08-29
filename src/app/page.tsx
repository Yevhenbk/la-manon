import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import MainBoard from "@/components/MainBoard";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <main className="">
      <Navbar />
      <MainBoard />
      <Card />
      <Footer />
    </main>
  );
};

export default Home;
