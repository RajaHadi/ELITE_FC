"use client";

import { motion } from "framer-motion";

export default function SocialBanner() {
  return (
    <section className="py-16 px-4 bg-background overflow-hidden relative">
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative group">
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 bg-gold/10 tilted-left transform scale-110 group-hover:scale-125 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20" />

        <div className="relative z-10 py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-foreground uppercase italic tracking-tighter mb-2">
              Meet us online, it's <span className="text-gold">FREE</span>
            </h3>
            <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
              Follow our daily training and match highlights
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-foreground text-background font-black uppercase tracking-widest hover:bg-gold transition-all"
          >
            Contact Info
          </a>
        </div>
      </div>
    </section>
  );
}
