import Particles from "../components/Particles";

export default function Start() {
  return (
    <div className="flex flex-col p-12 items-center justify-center w-screen h-screen overflow-hidden">
      <Particles className="absolute inset-0 animate-fade-in duration-10000" quantity={100} />
      <h1 className="z-10 animate-fade-in text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Hi there!
      </h1>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-zinc-750 ">Welcome to my website!</h2>
      </div>
    </div>
  );
}
