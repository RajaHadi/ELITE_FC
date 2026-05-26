"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Tilted Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-video md:aspect-square overflow-hidden rounded-2xl tilted-left border border-gold/30 gold-glow">
            <Image
              src="/players/Hassan.jpeg"
              alt="About the Club"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 bg-gold/5 rounded-2xl tilted-left -z-10" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">About the Club</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-8 uppercase italic tracking-tighter">
            WITH US YOU <span className="text-gold">CAN</span>
          </h3>
          
          <ul className="space-y-6">
            {[
              "Measure and track your players' progress",
              "Easily enter and update player data",
              "Get noticed by scouts from around the world"
            ].map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-300 font-medium">{text}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-10">
            <a
              href="/players"
              className="inline-block px-8 py-4 rounded-lg bg-gold/10 border border-gold/30 text-gold-light font-black hover:bg-gold/20 transition-all uppercase tracking-wider"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
