import { players } from "@/data/players";
import { matches } from "@/data/matches";
import { getPlayerRankings, getSeasonOverview } from "@/lib/stats";
import StatBoard from "@/components/ui/StatBoard";
import EmptyState from "@/components/ui/EmptyState";

export default function StatsPage() {
  if (players.length === 0 && matches.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <EmptyState
          title="No Stats Available"
          description="Statistics will appear once player and match data is added."
        />
      </main>
    );
  }

  const rankings = getPlayerRankings(players);
  const overview = getSeasonOverview(matches);

  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
      <h1 className="text-3xl font-black text-center mb-8 text-gold-light">
        Season Stats
      </h1>

      <div className="space-y-6">
        {/* Season Overview */}
        {overview.played > 0 && (
          <StatBoard
            title="Season Record"
            variant="record"
            entries={[
              { label: "Wins", value: overview.wins, highlight: true },
              { label: "Draws", value: overview.draws },
              { label: "Losses", value: overview.losses },
            ]}
          />
        )}

        {/* Player Rankings */}
        {rankings.length > 0 && (
          <StatBoard
            title="Player Rankings"
            entries={rankings.map((p) => ({
              label: p.name,
              value: p.rating,
              highlight: p.rating >= 85,
            }))}
          />
        )}

        {/* Goals Overview */}
        {overview.played > 0 && (
          <StatBoard
            title="Goals"
            variant="record"
            entries={[
              { label: "Scored", value: overview.goalsFor, highlight: true },
              { label: "Conceded", value: overview.goalsAgainst },
              {
                label: "Matches",
                value: overview.played,
              },
            ]}
          />
        )}
      </div>
    </main>
  );
}
