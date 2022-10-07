import { z } from 'zod';

export const matchesNowQuery = z.object({
  date: z.string({ required_error: 'Date is required' }),
});
