export default function Jumbotron() {
	return (
		<section className="bg-center bg-transparent">
			<div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				<div className="flex md:flex-row sm:flex-col space-x-0">
					<div className="basis-1/4 rounded-full p-0 md:scale-100 sm:scale-50">
						<img
							className="rounded-full shadow-2xl shadow-black dark:shadow-sky-500"
							src="./profile.jpg"
						/>
					</div>
					<div className="mb-8 px-0 mx-0 md:text-lg sm:text-sm basis-3/4 font-normal text-slate-800 dark:text-white text-left lg:text-xl sm:px-16 lg:px-48 justify-self-stretch">
						<div className="mb-4 font-extrabold tracking-tight leading-none text-center md:text-2xl lg:text-3xl">
							Futurist • Entrepreneur • Engineer
						</div>
						Hey everyone! I&apos;m a full time software engineer and
						a student, with a wide knowledge base in backend systems
						- particularly in networks, distributed systems, and
						data engineering. <br />I am currently also the
						co-founder of a startup -{" "}
						<a href="https://elgo-webapp.vercel.app/" target="_blank">
							<u>Elgo</u>
						</a>{" "}
						- that helps buildings save energy with AI and IoT. I am
						also currently engaged in research work revolving around
						compiler optimization at the SSA construction stage. <br />
						During my free time you could find me playing around
						with new tech, reading up on new journals, or
						aggresively researching on my latest interest!
					</div>
				</div>

				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
					<a
						href="#"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-400 dark:bg-sky-900 dark:hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						What am I upto
						<svg
							className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
