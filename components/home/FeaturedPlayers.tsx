"use client";

import { players } from "@/data/players";
import PlayerCard from "@/components/ui/PlayerCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturedPlayers() {
  const featured = [...players]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="px-4 py-24 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Elite Squad</motion.h2>
        <motion.h3 variants={itemVariants} className="text-5xl md:text-7xl font-black text-foreground uppercase italic tracking-tighter">
          OUR <span className="text-gold">TEAM</span>
        </motion.h3>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 justify-items-center"
      >
        {featured.map((player) => (
          <motion.div key={player.id} variants={itemVariants} className="w-full">
            <PlayerCard player={player} size="md" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <a
          href="/players"
          className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-colors font-black uppercase tracking-widest text-sm border-b-2 border-gold/20 pb-1"
        >
          View Full Squad Roster →
        </a>
      </motion.div>
    </section>
  );
}
