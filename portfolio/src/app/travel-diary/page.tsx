import { NavBar } from "../components/NavBar";
import Particles from "../components/Particles";
import TravelGlobe from "../components/TravelGlobe";
import { places } from "./places";

export default function TravelDiary() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={200} />
      <NavBar />
      <TravelGlobe places={places} />
    </div>
  );
}
