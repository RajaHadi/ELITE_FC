"use client";

import { useState, useMemo } from "react";
import { players } from "@/data/players";
import PlayerCard from "@/components/ui/PlayerCard";
import EmptyState from "@/components/ui/EmptyState";
import { motion, AnimatePresence } from "framer-motion";

const positions = ["ALL", "GK", "CB", "LCB", "RCB", "CMF", "LW", "RW"];

export default function PlayersPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredPlayers = useMemo(() => {
    if (filter === "ALL") return players;
    return players.filter((p) => p.position === filter);
  }, [filter]);

  if (players.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <EmptyState
          title="Roster Coming Soon"
          description="Players will be added shortly. Check back soon!"
        />
      </main>
    );
  }

  return (
    <main className="flex-1 px-4 py-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-black text-foreground uppercase italic tracking-tighter mb-4">
          ELITE <span className="text-gold">SQUAD</span>
        </h1>
        <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {positions.map((pos) => (
          <button
            key={pos}
            onClick={() => setFilter(pos)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              filter === pos
                ? "bg-gold text-slate-900 shadow-[0_0_15px_rgba(204,150,43,0.4)]"
                : "bg-slate-900/50 text-slate-400 hover:text-gold border border-gold/10 hover:border-gold/30"
            }`}
          >
            {pos}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8 justify-items-center"
      >
        <AnimatePresence mode="popLayout">
          {filteredPlayers.map((player) => (
            <motion.div
              key={player.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <PlayerCard player={player} size="md" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">No players found in this position.</p>
        </div>
      )}
    </main>
  );
}
