import CardProps from "./CardProps";
import Tag from "./Tag";

export default function Card(content: CardProps) {
	return (
		<div className="max-w-lg h-100 bg-white border border-gray-200 md:hover:shadow-md hover:shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img className="rounded-t-sm" src={content.imageSrc} alt="" />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{content.name}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{content.description}
				</p>
				
				<div className="flex flex-row gap-x-1">
					{
						content.tags.map((tag, index) => (
							<div key={index}>
								<Tag content={tag} />
							</div>
						))
					}
					
				</div>
				
				<div className="flex flex-col gap-y-1">
					
				<a
					href=""// replace this with the hover effect card.
					target="_blank"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-blue-700 dark:hover:text-white bg-blue-700 hover:bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
				<a
					href={content.documentation} 
					target="_blank"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 dark:text-white hover:text-white bg-white rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Repository
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
		</div>
	);
}
