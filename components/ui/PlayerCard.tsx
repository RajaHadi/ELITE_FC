"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Player } from "@/types/player";
import PlayerImage from "./PlayerImage";
import { getStatColor } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  size?: "sm" | "md" | "lg";
}

export default function PlayerCard({ player, size = "md" }: PlayerCardProps) {
  const ratingColor =
    player.rating >= 85
      ? "text-gold"
      : player.rating >= 75
        ? "text-gold-light"
        : "text-accent-yellow";

  return (
    <Link href={`/players/${player.id}`} className="group block">
      <motion.div
        layoutId={`card-${player.id}`}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative w-full overflow-visible"
      >
        {/* The Tilted Frame */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl tilted-left border border-gold/20 bg-slate-900 gold-glow group-hover:border-gold/50 transition-all">
          <PlayerImage src={player.image} alt={player.name} />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {/* Rating Badge */}
          <div className="absolute top-4 left-6 z-20">
            <div className={`text-4xl font-black italic tracking-tighter ${ratingColor}`}>
              {player.rating}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-1">
              {player.position}
            </div>
          </div>

          {/* Info Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <h4 className="text-xl font-black text-foreground uppercase italic tracking-tighter mb-1">
              {player.name}
            </h4>
            <div className="h-0.5 w-8 bg-gold rounded-full group-hover:w-16 transition-all" />
          </div>
        </div>

        {/* Floating Stat - Pace or Rating */}
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-slate-900 font-black text-sm border-4 border-background z-30 shadow-xl group-hover:scale-110 transition-transform">
          {player.stats.pace}
        </div>
      </motion.div>
    </Link>
  );
}
