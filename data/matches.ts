import { Match } from "@/types/match";

export const matches: Match[] = [
  {
    id: "vs-rival-fc-may",
    opponent: "Rival FC",
    date: "2026-05-10",
    time: "19:00",
    score: { home: 3, away: 1 },
    manOfTheMatch: "hadi",
    isHome: true,
  },
  {
    id: "vs-city-united-apr",
    opponent: "City United",
    date: "2026-04-25",
    time: "15:00",
    score: { home: 2, away: 2 },
    manOfTheMatch: "muneeb",
    isHome: false,
  },
  {
    id: "vs-athletic-club-apr",
    opponent: "Athletic Club",
    date: "2026-04-12",
    time: "14:00",
    score: { home: 1, away: 0 },
    manOfTheMatch: "uzair",
    isHome: true,
  },
  {
    id: "vs-north-end-mar",
    opponent: "North End",
    date: "2026-03-28",
    time: "18:30",
    score: { home: 0, away: 2 },
    manOfTheMatch: undefined,
    isHome: false,
  },
  {
    id: "vs-west-park-may",
    opponent: "West Park Rangers",
    date: "2026-05-24",
    time: "16:00",
    isHome: true,
  },
  {
    id: "vs-south-fc-jun",
    opponent: "South FC",
    date: "2026-06-07",
    time: "19:00",
    isHome: false,
  },
];
