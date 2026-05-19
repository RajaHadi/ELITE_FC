import { Player } from "@/types/player";
import { Match } from "@/types/match";

export function getPlayerRankings(players: Player[]): Player[] {
  return [...players].sort((a, b) => b.rating - a.rating);
}

export function getWinLossDrawSummary(
  matches: Match[]
): { wins: number; losses: number; draws: number } {
  const completed = matches.filter((m) => !!m.score);
  let wins = 0;
  let losses = 0;
  let draws = 0;

  for (const match of completed) {
    if (!match.score) continue;
    const ourScore = match.isHome ? match.score.home : match.score.away;
    const theirScore = match.isHome ? match.score.away : match.score.home;

    if (ourScore > theirScore) wins++;
    else if (ourScore < theirScore) losses++;
    else draws++;
  }

  return { wins, losses, draws };
}

export function getSeasonOverview(matches: Match[]): {
  played: number;
  wins: number;
  losses: number;
  draws: number;
  goalsFor: number;
  goalsAgainst: number;
} {
  const completed = matches.filter((m) => !!m.score);
  const summary = getWinLossDrawSummary(matches);
  let goalsFor = 0;
  let goalsAgainst = 0;

  for (const match of completed) {
    if (!match.score) continue;
    goalsFor += match.isHome ? match.score.home : match.score.away;
    goalsAgainst += match.isHome ? match.score.away : match.score.home;
  }

  return {
    played: completed.length,
    ...summary,
    goalsFor,
    goalsAgainst,
  };
}
