import { players } from "@/data/players";
import { matches } from "@/data/matches";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPlayers from "@/components/home/FeaturedPlayers";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import SocialBanner from "@/components/home/SocialBanner";
import ContactSection from "@/components/home/ContactSection";
import MatchCard from "@/components/ui/MatchCard";
import EmptyState from "@/components/ui/EmptyState";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function HomePage() {
  const sortedMatches = [...matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestMatch = sortedMatches.find((m) => !!m.score);
  const upcomingMatch = sortedMatches.find((m) => !m.score);

  return (
    <main className="flex-1 bg-background">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. About (With Us You Can) */}
      <AboutSection />

      {/* 3. Featured Players (Our Team) */}
      {players.length > 0 && <FeaturedPlayers />}

      {/* 4. Mission (Our Mission) */}
      <MissionSection />

      {/* 5. Social Banner */}
      <SocialBanner />

      {/* 6. Latest Results Banner (To keep data visible) */}
      {(latestMatch || upcomingMatch) && (
        <section className="px-4 py-16 bg-gold/5 border-y border-gold/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -z-10" />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Match Center</h2>
                <h3 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">SEASON <span className="text-gold">ACTION</span></h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                {latestMatch && (
                  <div className="flex-1 min-w-[300px]">
                    <MatchCard match={latestMatch} isLatest />
                  </div>
                )}
                {upcomingMatch && (
                  <div className="flex-1 min-w-[300px] flex flex-col gap-4">
                    <MatchCard match={upcomingMatch} />
                    <div className="p-4 rounded-xl bg-background/40 border border-gold/10 backdrop-blur-sm flex flex-col items-center">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Kick-off In</div>
                      <CountdownTimer targetDate={`${upcomingMatch.date}T${upcomingMatch.time || "00:00"}:00`} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Contact (Get in Touch) */}
      <ContactSection />

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
