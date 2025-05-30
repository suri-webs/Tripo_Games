import About from "@/Components/About/About";
import GetinTouch from "@/Components/GetinTouch/GetinTouch";
import Header from "@/Components/Header/Header";
import HoverCards from "@/Components/HoverCards/hoverCards";
import JoinourTeam from "@/Components/JoinourTeam/JoinourTeam";
import OurGame from "@/Components/OurGame/OurGame";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <HoverCards />
      <OurGame />
      <JoinourTeam />
      <GetinTouch />
    </>

  );
}
