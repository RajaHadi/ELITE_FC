"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-20 px-4 bg-background overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">True Story</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase italic tracking-tighter">
            OUR <span className="text-gold">MISSION</span>
          </h3>
          
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              ELITE INTELLIGENCE FC was established with a dream of going pro. Despite the challenges, our team continued to play and coach football at a local level, finding joy in helping others pursue their own dreams.
            </p>
            <p>
              Today, we are looking back at our performance with high ambitions and the drive to become the most recognized development platform in the region.
            </p>
          </div>
          
          <div className="mt-10">
            <a
              href="/stats"
              className="inline-block px-8 py-4 rounded-lg bg-gold text-slate-900 font-black hover:bg-gold-light transition-all uppercase tracking-wider"
            >
              Get Started For Free
            </a>
          </div>
        </motion.div>

        {/* Right: Tilted Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-2"
        >
          <div className="relative z-10 w-full aspect-video md:aspect-square overflow-hidden rounded-2xl tilted-right border border-gold/30 gold-glow">
            <Image
              src="/players/Abdullah.jpeg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-gold/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 bg-gold/5 rounded-2xl tilted-right -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
