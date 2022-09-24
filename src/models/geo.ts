import { z } from 'zod';

export const geoQuery = z.object({
  lat: z.string({ required_error: 'Latitude is required' }),
  lon: z.string({ required_error: 'Longitude is required' }),
});
