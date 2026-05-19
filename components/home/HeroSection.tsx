"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gold-light/5 via-transparent to-transparent" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(0, 255, 135, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 180, 216, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-bold tracking-widest text-sm uppercase mb-4">
            Est. 2026
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-foreground mb-4 leading-tight">
            ELITE INTELLIGENCE{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              FC
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Intelligence. Discipline. Dominance.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/players"
              className="px-6 py-3 rounded-xl bg-gold text-slate-900 font-bold hover:bg-gold/80 transition-colors"
            >
              View Squad
            </a>
            <a
              href="/matches"
              className="px-6 py-3 rounded-xl border border-card-border text-foreground font-bold hover:border-gold-light transition-colors"
            >
              Fixtures
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
