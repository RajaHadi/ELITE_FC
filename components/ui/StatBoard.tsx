"use client";

import { motion } from "framer-motion";

interface StatBoardProps {
  title: string;
  entries: Array<{ label: string; value: string | number; highlight?: boolean }>;
  variant?: "ranking" | "record";
}

export default function StatBoard({
  title,
  entries,
  variant = "ranking",
}: StatBoardProps) {
  return (
    <div className="p-6 rounded-2xl bg-card-bg border border-card-border">
      <h3 className="text-lg font-bold text-gold-light mb-4">{title}</h3>

      {variant === "ranking" && (
        <div className="space-y-3">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                    i === 0
                      ? "bg-gold/20 text-gold"
                      : i === 1
                        ? "bg-gold-light/20 text-gold-light"
                        : i === 2
                          ? "bg-accent-yellow/20 text-accent-yellow"
                          : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="font-medium text-foreground">
                  {entry.label}
                </span>
              </div>
              <span
                className={`font-bold ${
                  entry.highlight
                    ? "text-gold"
                    : "text-slate-300"
                }`}
              >
                {entry.value}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {variant === "record" && (
        <div className="grid grid-cols-3 gap-4 text-center">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-slate-800/50"
            >
              <div className="text-3xl font-black text-gold-light">
                {entry.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{entry.label}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
