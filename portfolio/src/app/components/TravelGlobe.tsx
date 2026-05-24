"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Place } from "../travel-diary/places";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// Tailwind palette anchored colors, tuned for legibility against the blue marble texture.
const VISITED_COLOR = "rgba(34, 197, 94, 0.75)";    // green-500
const PLANNED_COLOR = "rgba(59, 130, 246, 0.75)";   // blue-500
const UNVISITED_COLOR = "rgba(120, 120, 120, 0.2)"; // muted grey overlay

const PLANNED_COUNTRIES = new Set<string>([
  "Georgia",
  "Azerbaijan",
  "Kazakhstan",
  "Uzbekistan",
  "Kyrgyzstan",
]);

// Maps places.ts `country` values to the Natural Earth `ADMIN` property,
// so visited classification can match polygon names.
const PLACES_TO_NE: Record<string, string> = {
  UAE: "United Arab Emirates",
  "Czech Republic": "Czechia",
  // 110m resolution merges Hong Kong and Macau into China.
  "Hong Kong": "China",
  Macau: "China",
};

function placesCountryToNE(name: string): string {
  return PLACES_TO_NE[name] ?? name;
}

export default function TravelGlobe({ places }: { places: Place[] }) {
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [countries, setCountries] = useState<any[]>([]);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  // Cities grouped by Natural Earth country name (so China bucket also has HK/Macau).
  const citiesByNECountry = useMemo(() => {
    const map = new Map<string, Place[]>();
    places.forEach((p) => {
      const key = placesCountryToNE(p.country);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(p);
    });
    return map;
  }, [places]);

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    fetch("/countries-110m.geojson")
      .then((r) => r.json())
      .then((data) => setCountries(data.features));
  }, []);

  const handleGlobeReady = () => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  };

  const getCountryColor = (feature: any): string => {
    const name = feature.properties?.ADMIN;
    if (citiesByNECountry.has(name)) return VISITED_COLOR;
    if (PLANNED_COUNTRIES.has(name)) return PLANNED_COLOR;
    return UNVISITED_COLOR;
  };

  const handlePolygonHover = (polygon: any) => {
    if (!polygon) return;
    const name = polygon.properties?.ADMIN;
    if (citiesByNECountry.has(name) || PLANNED_COUNTRIES.has(name)) {
      setActiveCountry(name);
    }
  };

  const activeCities = activeCountry ? citiesByNECountry.get(activeCountry) : undefined;
  const activeIsPlanned = !!activeCountry && PLANNED_COUNTRIES.has(activeCountry);

  if (size.w === 0) return null;

  return (
    <>
      <div className="fixed inset-0 z-0">
        <Globe
          ref={globeRef}
          width={size.w}
          height={size.h}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="/earth-blue-marble.jpg"
          onGlobeReady={handleGlobeReady}
          polygonsData={countries}
          polygonAltitude={0.008}
          polygonCapColor={getCountryColor}
          polygonSideColor={() => "rgba(0, 0, 0, 0.15)"}
          polygonStrokeColor={() => "rgba(255, 255, 255, 0.18)"}
          polygonLabel={() => ""}
          onPolygonHover={handlePolygonHover}
        />
      </div>

      {activeCountry && (activeCities || activeIsPlanned) && (
        <div
          className="fixed top-32 right-6 z-40 w-64 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur border border-zinc-200 dark:border-zinc-800 shadow-lg p-4"
          onMouseLeave={() => undefined}
        >
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {activeCountry}
            </h2>
            <button
              onClick={() => setActiveCountry(null)}
              className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-base leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          {activeCities ? (
            <ul className="mt-3 space-y-0.5">
              {activeCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/travel-diary/${c.slug}`}
                    className="block px-2 py-1 text-sm rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Planned future trip
            </p>
          )}
        </div>
      )}
    </>
  );
}
