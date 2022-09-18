import { handleError } from './../../models/errors';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(handleError(error));
};

export default errorHandler;
