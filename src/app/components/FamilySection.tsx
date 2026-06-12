"use client";

import { motion } from "framer-motion";

export default function FamilySection() {
  return (
    <section id="familia" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-5xl md:text-6xl mb-6 block">👨‍👩‍👧</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-rose-700 mb-4">
            Nossa Família
          </h2>
          <div className="flex items-center justify-center gap-3 text-rose-300 mt-4">
            <span className="w-12 h-px bg-rose-300" />
            <span>💕</span>
            <span className="w-12 h-px bg-rose-300" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/50 border border-rose-100/80">
            {/* Decorative hearts in corners */}
            <div className="absolute -top-3 -left-3 text-2xl opacity-60">💗</div>
            <div className="absolute -top-3 -right-3 text-2xl opacity-60">💗</div>
            <div className="absolute -bottom-3 -left-3 text-2xl opacity-60">💗</div>
            <div className="absolute -bottom-3 -right-3 text-2xl opacity-60">💗</div>

            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-rose-800/80"
              >
                Andrezza, meu amor...
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed text-rose-800/70"
              >
                Você está mais linda do que nunca carregando a nossa <strong className="text-rose-600">Olívia</strong>. 
                Cada dia que passa, meu coração transborda mais de amor vendo você se transformar 
                nessa mãe incrível que eu sempre soube que seria.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl leading-relaxed text-rose-800/70"
              >
                Não vejo a hora de segurar a nossa pequena nos braços, de ver o seu sorriso 
                quando ela chegar. Mal posso esperar para viver cada momento dessa nova fase 
                ao seu lado. Você é a mulher mais forte e mais bonita que eu conheço.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-4"
              >
                <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-rose-600">
                  Eu amo vocês duas infinitamente. 💖
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-center justify-center gap-2 pt-4 text-rose-400"
              >
                <span className="text-sm">Tiago</span>
                <span>♥</span>
                <span className="text-sm">Andrezza</span>
                <span>♥</span>
                <span className="text-sm">Olívia</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
