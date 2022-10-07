import axios from 'axios';

export const MATCHES_API_URL = 'https://api.football-data.org/v4';

const client = axios.create({
  baseURL: MATCHES_API_URL,
  responseType: 'json',
  headers: { 'X-Auth-Token': process.env.MATCHES_API_KEY },
});

export const POPULAR_LEAGUE_IDS = ['CL', 'PL', 'PD', 'WC'];

/**
 * @param {string}  date  yyyy-MM-dd format e.g. 2018-06-22
 */
export const fetchMatchesByLeague = async (
  leagueId: string,
  date?: string,
  fromDate?: string,
  toDate?: string
) => {
  const todayDate = new Date();
  const today = todayDate.toISOString().split('T')[0];
  const res = await client.get(`/competitions/${leagueId}/matches`, {
    params: {
      dateFrom: date ?? fromDate ?? today,
      dateTo: date ?? toDate ?? today,
    },
  });
  console.log(res);
  return res.data as MatchesResponse;
};

export const fetchPopularMatches = async (
  date?: string
): Promise<LeagueMatches[]> => {
  const allMatches: LeagueMatches[] = [];
  const todayDate = new Date();
  const today = todayDate.toISOString().split('T')[0];
  for (const leagueId of POPULAR_LEAGUE_IDS) {
    const leagueMatchesRes = await fetchMatchesByLeague(leagueId, date);
    const { competition: league, matches } = leagueMatchesRes;
    allMatches.push({ league, matches, date: date ?? today });
  }
  return allMatches;
};
