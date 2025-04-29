import About from "@/Components/About/About";
import Footer from "@/Components/Footer/Footer";
import GetinTouch from "@/Components/GetinTouch/GetinTouch";
import Header from "@/Components/Header/Header";
import HoverCards from "@/Components/HoverCards/hoverCards";
import JoinourTeam from "@/Components/JoinourTeam/JoinourTeam";
import Navbar from "@/Components/Navbar/Navbar";
import OurGame from "@/Components/OurGame/OurGame";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <HoverCards />
      <OurGame />
      <JoinourTeam />
      <GetinTouch />
      <Footer />
    </>

  );
}
