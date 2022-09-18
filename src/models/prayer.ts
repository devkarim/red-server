import { z } from 'zod';

export const prayerNowQuery = z.object({
  city: z
    .string({ required_error: 'City is required' })
    .min(2, 'City must be at least 2 characters.'),
  country: z
    .string({ required_error: 'Country is required' })
    .min(2, 'Country must be at least 2 characters.'),
});
