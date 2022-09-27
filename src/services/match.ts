import axios from 'axios';

export const MATCHES_API_URL = 'https://api.football-data.org/v2';

const client = axios.create({
  baseURL: MATCHES_API_URL,
  responseType: 'json',
  headers: { 'X-Auth-Token': process.env.MATCHES_API_KEY },
});

export const POPULAR_LEAGUE_IDS = ['CL', 'PL', 'BL1', 'FL1', 'SA', 'PD', 'WC'];

export const fetchMatchesByLeague = async (
  leagueId: string,
  date?: string,
  fromDate?: string,
  toDate?: string
) => {
  const res = await client.get(`/competitions/${leagueId}/matches`, {
    params: {
      dateFrom: date ?? fromDate,
      dateTo: date ?? toDate,
    },
  });
  return res.data as MatchesResponse;
};

export const fetchPopularMatchesToday = async (
  date?: string
): Promise<MatchesToday> => {
  for (const leagueId of POPULAR_LEAGUE_IDS) {
    const leagueMatches = await fetchMatchesByLeague(leagueId, date);
  }
};
