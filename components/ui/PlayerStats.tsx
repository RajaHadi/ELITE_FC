import type { PlayerStats as PlayerStatsType } from "@/types/player";

function getStatColor(value: number): string {
  if (value >= 80) return "bg-accent-high";
  if (value >= 60) return "bg-accent-yellow";
  return "bg-accent-red";
}

interface PlayerStatsComponentProps {
  stats: PlayerStatsType;
  compact?: boolean;
}

const statLabels: Record<keyof PlayerStatsType, string> = {
  pace: "PAC",
  shooting: "SHO",
  passing: "PAS",
  dribbling: "DRI",
  defending: "DEF",
  physical: "PHY",
};

export default function PlayerStats({
  stats,
  compact = false,
}: PlayerStatsComponentProps) {
  return (
    <div className={`space-y-2 ${compact ? "text-sm" : "text-base"}`}>
      {(Object.entries(stats) as [keyof PlayerStatsType, number][]).map(
        ([key, value]) => (
          <div key={String(key)} className="flex items-center gap-3">
            <span className="w-10 font-mono text-slate-400 font-medium">
              {statLabels[key]}
            </span>
            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${getStatColor(value)} rounded-full transition-all duration-500`}
                style={{ width: `${value}%` }}
              />
            </div>
            <span
              className={`w-8 text-right font-bold ${
                value >= 80
                  ? "text-accent-high"
                  : value >= 60
                    ? "text-accent-yellow"
                    : "text-accent-red"
              }`}
            >
              {value}
            </span>
          </div>
        )
      )}
    </div>
  );
}
