import { Request, Response, NextFunction } from 'express';

import { ManualError } from './../models/errors';
import { UnauthorizedError } from '../models/errors';

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    throw new UnauthorizedError();
  }
};

const checkAuthVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) throw new UnauthorizedError();
  if (!req.user.verified)
    throw new ManualError([{ message: "Email isn't verified yet." }], 401);
  next();
};

export default checkAuthVerify;
