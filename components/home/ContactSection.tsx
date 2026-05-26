"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 uppercase italic tracking-tighter">
            GET IN <span className="text-gold">TOUCH</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-md">
            General support for young players, their official guardians, scouts, coaches for measurement of their talent potential and development.
          </p>

          <div className="space-y-8">
            <div>
              <div className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Email Us</div>
              <div className="text-foreground text-xl font-medium">info@eliteintel.fc</div>
            </div>
            <div>
              <div className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Call Us</div>
              <div className="text-foreground text-xl font-medium">+92 311 2222 333</div>
            </div>
            <div>
              <div className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Location</div>
              <div className="text-foreground text-xl font-medium">Islamabad, Pakistan</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-card-bg/50 backdrop-blur-xl border border-gold/20 gold-glow shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-xl bg-background border border-gold/10 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-gold/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-xl bg-background border border-gold/10 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-gold/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-background border border-gold/10 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-gold/50 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 rounded-xl bg-gold text-slate-900 font-black uppercase tracking-widest hover:bg-gold-light transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
