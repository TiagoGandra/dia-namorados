"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

function RunawayButton({ onClick }: { onClick: () => void }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasEscaped, setHasEscaped] = useState(false);

  const runAway = useCallback(() => {
    if (!buttonRef.current) return;

    setHasEscaped(true);
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setPosition({ x: newX, y: newY });
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      onClick={onClick}
      className="px-8 py-3 rounded-full bg-gray-200 text-gray-500 font-medium hover:bg-gray-300 transition-colors cursor-pointer select-none"
    >
      {hasEscaped ? "Não vai conseguir! 😜" : "Não 😢"}
    </motion.button>
  );
}

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  const fireConfetti = useCallback(() => {
    // Fire multiple bursts for a grand effect
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#f43f5e", "#ec4899", "#fda4af", "#fecdd3", "#ff6b6b", "#ff85a1"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        zIndex: 9999,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        zIndex: 9999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Big initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      zIndex: 9999,
    });

    frame();
  }, []);

  const handleAccept = useCallback(() => {
    setHasAccepted(true);
    fireConfetti();
  }, [fireConfetti]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section id="surpresa" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-5xl md:text-6xl block mb-6">🎁</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-rose-700 mb-6">
            Tem mais uma coisa...
          </h2>
          <p className="text-lg md:text-xl text-rose-600/70 mb-10">
            Antes de terminar, tenho algo especial para te perguntar! 😏
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-400/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse-soft"
          >
            <span className="text-2xl">💌</span>
            <span>Tenho uma pergunta importante...</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              ✨
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !hasAccepted && setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl shadow-rose-200/50 pointer-events-auto relative overflow-hidden">
                {/* Decorative gradient top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />

                {!hasAccepted ? (
                  <div className="text-center">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl block mb-6"
                    >
                      🥺
                    </motion.span>

                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-rose-700 mb-8">
                      Você aceita jantar comigo hoje para comemorarmos nosso dia?
                    </h3>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAccept}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-lg font-bold shadow-lg shadow-rose-300/50 hover:shadow-xl transition-shadow cursor-pointer"
                      >
                        Sim! 🥰
                      </motion.button>

                      <RunawayButton onClick={() => {}} />
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-center"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-7xl block mb-6"
                    >
                      🥰
                    </motion.span>

                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                      Te pego às 20h! 💖
                    </h3>

                    <p className="text-rose-500/70 text-lg mb-6">
                      Se arruma que hoje a noite é nossa! ✨
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-8 py-3 rounded-full bg-rose-100 text-rose-600 font-medium hover:bg-rose-200 transition-colors cursor-pointer"
                      >
                        Fechar 💕
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
