import { NavBar } from "../components/NavBar";
import Particles from "../components/Particles";
import TravelGlobe from "../components/TravelGlobe";
import { places } from "./places";

export default function TravelDiary() {
  const countryCount = new Set(places.map((p) => p.country)).size;
  const cityCount = places.length;

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={200} />
      <NavBar />
      <TravelGlobe places={places} />
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-xl bg-white/70 dark:bg-black/50 backdrop-blur border border-zinc-200 dark:border-zinc-800 flex items-center gap-6 text-center shadow-sm">
        <div>
          <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
            {countryCount}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
            countries
          </div>
        </div>
        <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
        <div>
          <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
            {cityCount}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
            cities
          </div>
        </div>
      </div>
    </div>
  );
}
