import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Jumbotron />
      <Carousel />
      <Footer />
    </main>
  );
}
