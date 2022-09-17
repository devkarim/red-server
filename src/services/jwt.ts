import jwt from 'jsonwebtoken';

export function signToken(token: any, expiresIn: string | number = '3d') {
  return jwt.sign(token, process.env.JWT_SECRET, {
    expiresIn,
  });
}

export function verifyToken<T>(token: any) {
  return jwt.verify(token, process.env.JWT_SECRET) as T;
}
