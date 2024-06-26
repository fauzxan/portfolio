export function Footer() {
	return (
		<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 relative bottom-0">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-center">
					<ul className=" flex justify-center flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a
								href="https://www.github.com/fauzxan/portfolio"
								target="_blank"
								className="hover:underline me-4 md:me-6"
							>
								Repository
							</a>
						</li>
						<li>
							<a href="./contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					Fauzaan&apos;s portfolio
				</span>
			</div>
		</footer>
	);
}
