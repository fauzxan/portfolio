import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Particles from "./components/Particles";
import Start from "./components/Start";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Particles className="absolute inset-0 -z-10 pointer-events-none" quantity={200} />
      <NavBar />
      <Start />
	  <Jumbotron />
      <Footer />
    </main>
  );
}
