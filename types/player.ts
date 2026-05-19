export interface PlayerStats {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: string;
  name: string;
  image: string;
  position: string;
  rating: number;
  stats: PlayerStats;
  biography?: string;
}
