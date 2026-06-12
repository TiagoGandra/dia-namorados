"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/foto1.jpg", alt: "Nosso momento especial 1" },
  { src: "/foto2.jpg", alt: "Nosso momento especial 2" },
  { src: "/foto3.jpg", alt: "Nosso momento especial 3" },
  { src: "/foto4.jpg", alt: "Nosso momento especial 4" },
  { src: "/foto5.png", alt: "Nosso momento especial 5" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-rose-700 mb-4">
            Nossos Momentos
          </h2>
          <p className="text-rose-500/70 text-lg max-w-md mx-auto">
            Cada foto guarda um pedacinho do nosso amor
          </p>
          <div className="flex items-center justify-center gap-3 text-rose-300 mt-6">
            <span className="w-12 h-px bg-rose-300" />
            <span>📸</span>
            <span className="w-12 h-px bg-rose-300" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-rose-200/50 ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Heart icon on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-3xl drop-shadow-lg">❤️</span>
              </div>
              {/* Soft border glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-rose-200/50 group-hover:ring-rose-300/80 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
