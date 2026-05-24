"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Place } from "../travel-diary/places";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function TravelGlobe({ places }: { places: Place[] }) {
  const router = useRouter();
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleGlobeReady = () => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  };

  if (size.w === 0) return null;

  return (
    <div className="fixed inset-0 z-0">
      <Globe
        ref={globeRef}
        width={size.w}
        height={size.h}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="/earth-blue-marble.jpg"
        onGlobeReady={handleGlobeReady}
        pointsData={places}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointAltitude={0.15}
        pointRadius={0.08}
        pointColor={() => "#f59e0b"}
        pointLabel={(d: any) =>
          `<div style="background:rgba(0,0,0,0.85);color:white;padding:6px 10px;border-radius:4px;font-family:sans-serif;font-size:13px;line-height:1.4"><strong>${d.name}${d.country ? `, ${d.country}` : ""}</strong><br/>${d.date}</div>`
        }
        onPointClick={(d: any) => router.push(`/travel-diary/${d.slug}`)}
        labelsData={places}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.name}
        labelAltitude={0.17}
        labelSize={0.4}
        labelDotRadius={0}
        labelColor={() => "#f59e0b"}
        labelResolution={2}
      />
    </div>
  );
}
