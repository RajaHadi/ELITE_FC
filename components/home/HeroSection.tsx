"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-32 md:pb-24 px-4">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-dim/10 tilted-left hidden md:block" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Season 2026 Active
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-foreground mb-6 leading-[0.9] uppercase italic tracking-tighter">
            From Zero to <br />
            <span className="text-gold">Football</span> Hero
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We focus on enabling small football clubs to become visible & offer opportunity for your players to get scouted internationally.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/players"
              className="px-8 py-4 rounded-lg bg-gold text-slate-900 font-black hover:bg-gold-light transition-all uppercase tracking-wider flex items-center gap-2"
            >
              Get Started For Free
            </a>
            <a
              href="/matches"
              className="px-8 py-4 rounded-lg border border-gold/30 text-foreground font-bold hover:bg-gold/5 transition-all uppercase tracking-wider"
            >
              Fixtures
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Trusted By</div>
            <div className="w-8 h-8 bg-slate-400 rounded-full" title="Sponsor 1" />
            <div className="w-8 h-8 bg-slate-500 rounded-full" title="Sponsor 2" />
            <div className="w-8 h-8 bg-slate-600 rounded-full" title="Sponsor 3" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl border-2 border-gold/20 gold-glow">
            <Image
              src="/players/Muneeb.jpeg"
              alt="Elite Player"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/60 backdrop-blur-md border border-gold/20">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gold font-black text-2xl leading-none">95</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase">OVR</div>
                </div>
                <div className="h-8 w-px bg-gold/20" />
                <div>
                  <div className="text-foreground font-black text-xl leading-none">MUNEEB</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Left Wing</div>
                </div>
                <div className="h-8 w-px bg-gold/20" />
                <div className="flex gap-1">
                  <div className="w-1.5 h-6 bg-gold/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gold w-full" style={{ height: '92%' }} />
                  </div>
                  <div className="w-1.5 h-6 bg-gold/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gold w-full" style={{ height: '80%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
