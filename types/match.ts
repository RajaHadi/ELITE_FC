export interface MatchScore {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time?: string;
  score?: MatchScore;
  manOfTheMatch?: string;
  isHome: boolean;
}
