import { Request, Response, NextFunction } from 'express';
import BaseError, { BaseErrorAdapter } from '../models/errors';

const withCatch =
  (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await func(req, res, next);
    } catch (err) {
      if (err instanceof BaseError) {
        next(err);
      } else {
        next(new BaseErrorAdapter([{ message: err.message }], err.stack));
      }
    }
  };

export default withCatch;
