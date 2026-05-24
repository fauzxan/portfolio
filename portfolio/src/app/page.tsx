import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Particles from "./components/Particles";
import Start from "./components/Start";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Start />
	  <Jumbotron />
      <Footer />
    </main>
  );
}
