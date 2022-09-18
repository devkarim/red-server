import { z } from 'zod';

export const weatherQuery = z.object({
  city: z
    .string({ required_error: 'City is required' })
    .min(2, 'City must be at least 2 characters long.'),
});
