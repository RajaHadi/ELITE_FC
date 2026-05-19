import { players } from "@/data/players";
import PlayerCard from "@/components/ui/PlayerCard";

export default function FeaturedPlayers() {
  const featured = [...players]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          Featured Players
        </h2>
        <a
          href="/players"
          className="text-gold-light hover:text-gold transition-colors font-medium"
        >
          View All →
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
        {featured.map((player) => (
          <PlayerCard key={player.id} player={player} size="md" />
        ))}
      </div>
    </section>
  );
}
