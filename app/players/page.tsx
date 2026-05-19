import { players } from "@/data/players";
import PlayerCard from "@/components/ui/PlayerCard";
import EmptyState from "@/components/ui/EmptyState";

export default function PlayersPage() {
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
    <main className="flex-1 px-4 py-8 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-black text-center mb-8 text-gold-light">
        Elite Squad
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} size="md" />
        ))}
      </div>
    </main>
  );
}
