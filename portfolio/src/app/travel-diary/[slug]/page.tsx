import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import Particles from "../../components/Particles";
import { places } from "../places";

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export default function Entry({ params }: { params: { slug: string } }) {
  const place = places.find((p) => p.slug === params.slug);
  if (!place) notFound();

  return (
    <>
      <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={200} />
      <NavBar />
      <main className="pt-24 pb-16 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-100">
          {place.name}{place.country && place.country !== place.name ? `, ${place.country}` : ""}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">{place.date}</p>
        <div className="mt-8 aspect-video bg-zinc-200/60 dark:bg-zinc-800/60 backdrop-blur rounded flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          Image slot
        </div>
        <p className="mt-8 text-zinc-700 dark:text-zinc-300">
          Diary entry coming soon — placeholder text for {place.name}.
        </p>
        <Link href="/travel-diary" className="inline-block mt-12 text-blue-700 dark:text-blue-500 hover:underline">
          ← Back to globe
        </Link>
      </main>
      <Footer />
    </>
  );
}
