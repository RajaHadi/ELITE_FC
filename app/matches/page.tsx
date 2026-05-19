import { matches } from "@/data/matches";
import MatchCard from "@/components/ui/MatchCard";
import EmptyState from "@/components/ui/EmptyState";

export default function MatchesPage() {
  if (matches.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <EmptyState
          title="No Matches Scheduled"
          description="Match fixtures will be added when the season begins."
        />
      </main>
    );
  }

  const sorted = [...matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestCompleted = sorted.find((m) => !!m.score);

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
      <h1 className="text-3xl font-black text-center mb-8 text-gold-light">
        Fixtures & Results
      </h1>
      <div className="space-y-4">
        {sorted.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            isLatest={match.id === latestCompleted?.id}
          />
        ))}
      </div>
    </main>
  );
}
