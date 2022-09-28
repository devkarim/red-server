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
  matchday?: number;
  stage: string;
  group?: string;
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
  fullTime: FullTime;
  halfTime: HalfTime;
  extraTime: ExtraTime;
  penalties: Penalties;
}

interface FullTime {
  homeTeam?: number;
  awayTeam?: number;
}

interface HalfTime {
  homeTeam?: number;
  awayTeam?: number;
}

interface ExtraTime {
  homeTeam?: number;
  awayTeam?: number;
}

interface Penalties {
  homeTeam?: number;
  awayTeam?: number;
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
  league: Competition;
  date: string;
  matches: MatchToday[];
}
