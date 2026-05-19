import { Match } from "@/types/match";
import { players } from "@/data/players";

interface MatchDetailCardProps {
  match: Match;
}

export default function MatchDetailCard({ match }: MatchDetailCardProps) {
  const isCompleted = !!match.score;
  const motmPlayer = match.manOfTheMatch
    ? players.find((p) => p.id === match.manOfTheMatch)
    : null;

  const formattedDate = new Date(match.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-8 rounded-2xl bg-card-bg border border-card-border">
      {/* Date + Location */}
      <div className="text-center mb-6">
        <p className="text-slate-400">{formattedDate}</p>
        {match.time && <p className="text-slate-500 mt-1">{match.time} KO</p>}
        <span
          className={`inline-block mt-2 text-xs font-bold px-3 py-1 rounded ${
            match.isHome
              ? "bg-accent-high/20 text-accent-high"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {match.isHome ? "HOME" : "AWAY"}
        </span>
      </div>

      {/* Score / TBD */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="text-right">
          <p className="text-xl font-bold text-foreground">ELITE INTELLIGENCE FC</p>
        </div>
        {isCompleted ? (
          <div className="text-5xl font-black text-gold-light">
            {match.isHome
              ? `${match.score!.home} - ${match.score!.away}`
              : `${match.score!.away} - ${match.score!.home}`}
          </div>
        ) : (
          <div className="text-3xl font-black text-slate-500">VS</div>
        )}
        <div className="text-left">
          <p className="text-xl font-bold text-foreground">{match.opponent}</p>
        </div>
      </div>

      {/* Man of the Match */}
      {isCompleted && motmPlayer && (
        <div className="text-center pt-4 border-t border-card-border">
          <p className="text-slate-400 text-sm">Man of the Match</p>
          <p className="text-gold font-bold text-lg mt-1">
            {motmPlayer.name}
          </p>
        </div>
      )}

      {/* Upcoming label */}
      {!isCompleted && (
        <div className="text-center pt-4 border-t border-card-border">
          <p className="text-gold-light font-bold">Upcoming Match</p>
          <p className="text-slate-400 text-sm mt-1">
            Check back for the result
          </p>
        </div>
      )}
    </div>
  );
}
