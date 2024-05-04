import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Projects() {
  return (
    <div>
      <NavBar />
      <div className="mb-4 pt-20 font-extrabold tracking-wide leading-none text-black dark:text-white text-center text-3xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-950 dark:from-amber-500 dark:to-slate-500">
          Blogs and Articles Page
        </span>
      </div>
      <Footer />
    </div>
  );
}
