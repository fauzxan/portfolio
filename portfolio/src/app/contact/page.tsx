import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Page() {
	return (
		<div>
			<NavBar />
			<div className="mb-4 pt-20 font-extrabold tracking-wide leading-none text-black dark:text-white text-center text-3xl">
					Contact Page
			</div>
			<Footer />
		</div>
	);
}
