import { notFound } from "next/navigation";
import { matches } from "@/data/matches";
import MatchDetailCard from "@/components/ui/MatchDetailCard";

interface MatchDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MatchDetailPage({ params }: MatchDetailPageProps) {
  const { id } = await params;
  const match = matches.find((m) => m.id === id);

  if (!match) {
    notFound();
  }

  return (
    <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
      <a
        href="/matches"
        className="inline-flex items-center gap-1 text-slate-400 hover:text-gold-light transition-colors mb-8"
      >
        ← Back to Fixtures
      </a>
      <MatchDetailCard match={match} />
    </main>
  );
}
