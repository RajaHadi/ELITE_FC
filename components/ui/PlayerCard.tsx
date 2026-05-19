"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Player } from "@/types/player";
import PlayerImage from "./PlayerImage";

function getStatColor(value: number): string {
  if (value >= 80) return "text-accent-high";
  if (value >= 60) return "text-accent-yellow";
  return "text-accent-red";
}

interface PlayerCardProps {
  player: Player;
  size?: "sm" | "md" | "lg";
}

export default function PlayerCard({ player, size = "md" }: PlayerCardProps) {
  const sizeClasses = {
    sm: "w-36 sm:w-44",
    md: "w-full",
    lg: "w-72",
  };

  const ratingColor =
    player.rating >= 85
      ? "text-gold"
      : player.rating >= 75
        ? "text-gold-light"
        : "text-accent-yellow";

  return (
    <Link href={`/players/${player.id}`} className="block">
      <motion.div
        layoutId={`card-${player.id}`}
        whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 180, 216, 0.3)" }}
        transition={{ duration: 0.2 }}
        className={`relative ${sizeClasses[size]} mx-auto overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-card-border cursor-pointer`}
      >
        {/* Rating + Position */}
        <div className="absolute top-2 left-3 sm:top-3 sm:left-4 z-10">
          <div className={`text-3xl sm:text-4xl font-black ${ratingColor}`}>
            {player.rating}
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-300 -mt-1">
            {player.position}
          </div>
        </div>

        {/* Player Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <PlayerImage src={player.image} alt={player.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Name */}
        <div className="p-3 sm:p-4 pt-1 text-center">
          <p className="font-bold text-sm sm:text-base text-foreground truncate">
            {player.name}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm">
          {Object.entries(player.stats).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-bold text-slate-400 uppercase w-3 sm:w-4">
                {key[0].toUpperCase()}
              </span>
              <span className={`font-semibold ${getStatColor(value)}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
