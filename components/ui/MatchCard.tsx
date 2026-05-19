"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Match } from "@/types/match";

interface MatchCardProps {
  match: Match;
  isLatest?: boolean;
}

export default function MatchCard({ match, isLatest }: MatchCardProps) {
  const isCompleted = !!match.score;

  return (
    <Link href={`/matches/${match.id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.01, borderColor: "rgba(0, 180, 216, 0.5)" }}
        transition={{ duration: 0.2 }}
        className={`p-4 rounded-xl bg-card-bg border border-card-border ${
          isLatest ? "ring-1 ring-gold" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Date */}
          <div className="text-sm text-slate-400">
            {new Date(match.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            {match.time && (
              <span className="ml-2">{match.time}</span>
            )}
          </div>

          {/* Location Badge */}
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${
              match.isHome
                ? "bg-accent-high/20 text-accent-high"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            {match.isHome ? "HOME" : "AWAY"}
          </span>
        </div>

        {/* Teams + Score */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground">ELITE INTELLIGENCE FC</span>
            {isCompleted ? (
              <span className="text-2xl font-black text-gold-light">
                {match.isHome
                  ? `${match.score!.home} - ${match.score!.away}`
                  : `${match.score!.away} - ${match.score!.home}`}
              </span>
            ) : (
              <span className="text-xl font-bold text-slate-500">TBD</span>
            )}
            <span className="font-bold text-foreground">{match.opponent}</span>
          </div>
        </div>

        {/* Man of the Match */}
        {isCompleted && match.manOfTheMatch && (
          <div className="mt-2 text-sm text-slate-400">
            MOTM:{" "}
            <span className="text-gold font-semibold">
              {match.manOfTheMatch}
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
