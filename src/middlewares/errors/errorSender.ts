import { Request, Response, NextFunction } from 'express';
import BaseError from '../../models/errors';

const errorSender = (
  error: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(error.statusCode || 500).json(error.msg);
};

export default errorSender;
