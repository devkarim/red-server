import { User as PrismaUser } from '@prisma/client';

declare global {
  namespace Express {
    interface User extends PrismaUser {}
  }
  namespace CookieSessionInterfaces {
    interface CookieSessionObject {
      passport: { user: number };
    }
  }
}

export {};
