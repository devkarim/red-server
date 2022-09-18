import { zodToError } from './../models/errors';
import { z, AnyZodObject, ZodError } from 'zod';

const validate = async <T extends AnyZodObject, K>(
  schema: T,
  obj: K,
  statusCode?: number
) => {
  try {
    const parsedData = (await schema.parseAsync(obj)) as Promise<
      z.infer<typeof schema>
    >;
    return parsedData;
  } catch (err) {
    if (err instanceof ZodError) {
      throw zodToError(err, statusCode);
    }
    throw err;
  }
};

export default validate;
