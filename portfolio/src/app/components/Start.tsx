export default function Start() {
  return (
    <div className="flex flex-col p-12 items-center justify-center w-screen h-screen overflow-hidden">
      <h1 className="z-10 text-4xl text-transparent bg-white cursor-default sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Hi there!
      </h1>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="my-16 text-center">
        <h2 className="text-md text-zinc-700 ">Welcome to my website!</h2>
      </div>
    </div>
  );
}
