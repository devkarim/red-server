import { Request, Response, NextFunction } from 'express';
import BaseError from '../../models/errors';

const errorLogger = (
  error: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  next(error);
};

export default errorLogger;
