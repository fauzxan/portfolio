import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Carousel from "./components/ProjectCarousel";
import CustomCursor from "./components/CustomCursor";
import Start from "./components/Start";

export default function Home() {
  return (
    <main className="">
      <CustomCursor />
      <NavBar />
      <Start />
	  <Jumbotron />
      <Carousel />
      <Footer />
    </main>
  );
}
