import { PrismaClient } from '@prisma/client';
import { __dev__ } from '../config/constants';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prismaClient: PrismaClient | undefined;
}

const prisma =
  global.prismaClient ||
  new PrismaClient({
    log: ['query'],
  });

export default prisma;

if (__dev__) global.prismaClient = prisma;
