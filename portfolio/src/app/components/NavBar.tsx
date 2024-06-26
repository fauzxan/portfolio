"use client";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export function NavBar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Check if the scroll threshold is greater than 100, then change the isScrolled parameter accordingly
	useEffect(() => {
		const handleScroll = () => {
			const threshold = 100;
			const scrolled = window.scrollY > threshold;
			setIsScrolled(scrolled);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className={`bg-${isScrolled ? "sky-200" : "white"} border-gray-200 dark:bg-black transition-all top-0 fixed w-full z-50`}>
			<div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1}`}>
				<div
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<ThemeSwitch />
					<a href="./">
					<span
						className={`self-center text-2xl font-semibold whitespace-nowrap text-${isScrolled ? "black" : "black"} dark:text-${isScrolled ? "white" : "black"} dark:text-white`}
					>
						<span className="hover:text-blue-500">Fauzaan&apos;s</span> <span className="hover:text-green-500">Portfolio</span>
					</span>
					</a>
				</div>
				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-sticky"
					aria-expanded="false"
					onClick={toggleMobileMenu}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
					id="navbar-sticky"
				>
					<ul
						className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
						onMouseLeave={toggleMobileMenu}
					>
						<li>
							<a
								href="./experience"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:shadow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-${
									isScrolled ? "black" : "black"
								} dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
							>
								Work Experience
							</a>
						</li>
						<li>
							<a
								href="./projects"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:shadow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-${isScrolled ? "black" : "black"} dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
								Projects
							</a>
						</li>
						<li>
							<a
								href="./research"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:shadow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-${isScrolled ? "black" : "black"} dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
								Research
							</a>
						</li>
						<li>
							<a
								href="./blogs"
								className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:shadow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-${isScrolled ? "black" : "black"} dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
								Blogs & Articles
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
