import axios from 'axios';

export const PRAYER_API_URL = 'https://api.aladhan.com/v1';

const client = axios.create({ baseURL: PRAYER_API_URL, responseType: 'json' });

export const fetchPrayersByCity = async (
  city: string,
  country: string,
  month?: number,
  year?: number,
  method?: string
): Promise<PrayerResponse> => {
  const res = await client.get(`/calendarByCity`, {
    params: { city, country, month, year, method },
  });
  return res.data as PrayerResponse;
};
