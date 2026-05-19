import { notFound } from "next/navigation";
import { players } from "@/data/players";
import PlayerStats from "@/components/ui/PlayerStats";
import PlayerImage from "@/components/ui/PlayerImage";

interface PlayerDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlayerDetailPage({
  params,
}: PlayerDetailPageProps) {
  const { id } = await params;
  const player = players.find((p) => p.id === id);

  if (!player) {
    notFound();
  }

  const ratingColor =
    player.rating >= 85
      ? "text-gold"
      : player.rating >= 75
        ? "text-gold-light"
        : "text-accent-yellow";

  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
      {/* Back link */}
      <a
        href="/players"
        className="inline-flex items-center gap-1 text-slate-400 hover:text-gold-light transition-colors mb-8"
      >
        ← Back to Squad
      </a>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* FIFA-Style Large Card */}
        <div className="relative rounded-2xl overflow-hidden border border-card-border bg-gradient-to-b from-slate-800 to-slate-900">
          {/* Rating */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`text-5xl font-black ${ratingColor}`}>
              {player.rating}
            </div>
            <div className="text-lg font-bold text-slate-300">
              {player.position}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 w-full">
            <PlayerImage src={player.image} alt={player.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>

          {/* Name */}
          <div className="p-6 pt-2 text-center">
            <h2 className="text-2xl font-black">{player.name}</h2>
          </div>
        </div>

        {/* Stats + Bio */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gold-light mb-4">Stats</h3>
            <PlayerStats stats={player.stats} />
          </div>

          {player.biography && (
            <div>
              <h3 className="text-lg font-bold text-gold-light mb-2">
                About
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {player.biography}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
