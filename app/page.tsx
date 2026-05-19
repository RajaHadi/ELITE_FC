import { players } from "@/data/players";
import { matches } from "@/data/matches";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPlayers from "@/components/home/FeaturedPlayers";
import MatchCard from "@/components/ui/MatchCard";
import EmptyState from "@/components/ui/EmptyState";

export default function HomePage() {
  const sortedMatches = [...matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestMatch = sortedMatches.find((m) => !!m.score);
  const upcomingMatch = sortedMatches.find((m) => !m.score);

  return (
    <main className="flex-1">
      {/* Hero */}
      <HeroSection />

      {/* Featured Players */}
      {players.length > 0 && <FeaturedPlayers />}

      {/* Latest Match + Upcoming */}
      {(latestMatch || upcomingMatch) && (
        <section className="px-4 py-12 max-w-3xl mx-auto space-y-6">
          {latestMatch && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Latest Result
              </h2>
              <MatchCard match={latestMatch} isLatest />
            </div>
          )}

          {upcomingMatch && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Next Fixture
              </h2>
              <MatchCard match={upcomingMatch} />
            </div>
          )}
        </section>
      )}

      {/* Empty fallback */}
      {players.length === 0 && matches.length === 0 && (
        <EmptyState
          title="Welcome to ELITE INTELLIGENCE FC"
          description="Content is being prepared. Check back soon for squad and fixtures."
        />
      )}
    </main>
  );
}
