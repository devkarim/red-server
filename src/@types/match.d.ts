interface MatchesResponse {
  count: number;
  filters: Filters;
  competition: Competition;
  matches: Match[];
}

interface Filters {}

interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

interface Area {
  id: number;
  name: string;
}

interface Match {
  id: number;
  season: Season;
  utcDate: string;
  status: MatchStatus;
  matchday?: number | null;
  stage: string;
  group?: string | null;
  lastUpdated: string;
  odds: Odds;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
  referees: Referee[];
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

interface Odds {
  msg: string;
}

interface Score {
  winner?: string;
  duration: string;
  fullTime: TimeScore;
  halfTime: TimeScore;
  extraTime: TimeScore;
  penalties: TimeScore;
}

interface TimeScore {
  homeTeam?: number | null;
  awayTeam?: number | null;
}

interface Team {
  id: number;
  name: string;
}

interface Referee {
  id: number;
  name: string;
  role: string;
  nationality?: string;
}

type MatchStatus =
  | 'SCHEDULED'
  | 'LIVE'
  | 'IN_PLAY'
  | 'PAUSED'
  | 'FINISHED'
  | 'POSTPONED'
  | 'SUSPENDED'
  | 'CANCELLED';

interface MatchToday extends Match {}

interface LeagueMatchesToday {
  league: string;
  date: string;
  matches: MatchToday[];
}
