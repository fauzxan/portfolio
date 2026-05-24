"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
				<Link href="/" className="flex items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-900 dark:text-zinc-100">
						<span className="hover:text-blue-500">Fauzaan&apos;s</span>{" "}
						<span className="hover:text-green-500">Portfolio</span>
					</span>
				</Link>

				<button
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:focus:ring-zinc-700"
					aria-controls="navbar-sticky"
					aria-expanded={isMobileMenuOpen}
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

				{/* Desktop nav */}
				<div className="hidden md:flex md:items-center md:gap-6" id="navbar-sticky">
					<ul className="flex flex-row items-center gap-6 font-medium">
						<li>
							<Link
								href="/experience"
								className="text-zinc-900 dark:text-zinc-100 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
							>
								Work experience
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								className="text-zinc-900 dark:text-zinc-100 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
							>
								Projects
							</Link>
						</li>
						<li aria-hidden="true" className="border-l border-zinc-300 dark:border-zinc-700 h-4 mx-2" />
						<li>
							<Link
								href="#"
								className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
							>
								Travel diary
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
							>
								Now
							</Link>
						</li>
					</ul>
					<div className="flex items-center">
						<ThemeSwitch />
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:hidden`}
					id="navbar-sticky-mobile"
				>
					<ul className="flex flex-col p-4 mt-4 rounded-lg font-medium gap-1">
						<li>
							<span className="block text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 pb-1">
								Work
							</span>
						</li>
						<li>
							<Link
								href="/experience"
								onClick={closeMobileMenu}
								className="block py-2 px-3 rounded text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
							>
								Work experience
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								onClick={closeMobileMenu}
								className="block py-2 px-3 rounded text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
							>
								Projects
							</Link>
						</li>
						<li aria-hidden="true" className="border-t border-zinc-200 dark:border-zinc-800 my-2" />
						<li>
							<span className="block text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 pb-1">
								Life
							</span>
						</li>
						<li>
							<Link
								href="#"
								onClick={closeMobileMenu}
								className="block py-2 px-3 rounded text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
							>
								Travel diary
							</Link>
						</li>
						<li>
							<Link
								href="#"
								onClick={closeMobileMenu}
								className="block py-2 px-3 rounded text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
							>
								Now
							</Link>
						</li>
						<li className="flex items-center px-3 pt-3">
							<ThemeSwitch />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
