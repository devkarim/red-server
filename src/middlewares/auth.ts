import { ManualError } from './../models/errors';
import { UnauthorizedError } from '../models/errors';
import withCatch from '../helpers/withCatch';

export const checkAuth = withCatch(async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    throw new UnauthorizedError();
  }
});

const checkAuthVerify = withCatch(async (req, res, next) => {
  if (!req.user) throw new UnauthorizedError();
  if (!req.user.verified)
    throw new ManualError([{ message: "Email isn't verified yet." }], 401);
  next();
});

export default checkAuthVerify;
