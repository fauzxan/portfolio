export default function Jumbotron() {
  return (
    <section className="bg-center bg-sky-700">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <div className="flex md:flex-row flex-wrap">
          <div className="mb-8 text-lg basis-3/4 font-normal text-white lg:text-xl sm:px-16 lg:px-48">
            <div className="mb-4 font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-3xl">
              Futurist • Entrepreneur • Engineer
            </div>
            Hey everyone! I&apos;m a full time software engineer and a student, with
            a wide knowledge base in backend systems - particularly in networks,
            distributed systems, and data engineering. I am currently also the
            co-founder of a startup -{" "}
            <a href="https://www.elgoapp.com" target="_blank">
              <u>Elgo</u>
            </a>{" "}
            - that helps buildings save energy with AI and IoT. I am also
            currently engaged in research work revolving around compiler
            optimization at the SSA stage. During my free time you could find me
            playing around with new tech, reading up on new journals, or
            aggresively researching on my latest interest!
          </div>
          <div className="basis-1/4 rounded-full">
            <img className="rounded-full " src="./profile.jpg" />
          </div>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          {/* <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>   */}
        </div>
      </div>
    </section>
  );
}
