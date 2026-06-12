"use client";

import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import FamilySection from "./components/FamilySection";
import CtaSection from "./components/CtaSection";

const FloatingHearts = dynamic(() => import("./components/FloatingHearts"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      <FloatingHearts />
      <HeroSection />
      <GallerySection />
      <FamilySection />
      <CtaSection />

      {/* Footer */}
      <footer className="py-8 text-center text-rose-400/60 text-sm">
        <p>
          Feito com todo o amor do mundo 💖
        </p>
        <p className="mt-1">
          Tiago & Andrezza — Junho 2026
        </p>
      </footer>
    </main>
  );
}
