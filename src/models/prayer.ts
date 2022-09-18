import { z } from 'zod';

export const prayerNowQuery = z.object({
  lat: z.string({ required_error: 'Latitude is required' }),
  lon: z.string({ required_error: 'Longitude is required' }),
  day: z.string({ required_error: 'Day is required' }),
});

export const prayerNowCityQuery = z.object({
  city: z
    .string({ required_error: 'City is required' })
    .min(2, 'City must be at least 2 character long'),
  country: z
    .string({ required_error: 'Country is required' })
    .min(2, 'Country must be at least 2 character long'),
});
