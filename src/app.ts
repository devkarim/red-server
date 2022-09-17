require('dotenv').config();

import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';

import router from './routes';
import {
  PORT,
  MAIN_DOMAIN_URL,
  SERVER_URL,
  DOMAIN,
  __prod__,
} from './config/constants';
import prisma from './services/prisma';
import errorLogger from './middlewares/errors/errorLogger';
import errorSender from './middlewares/errors/errorSender';

const app = express();

async function main() {
  useDefaultRoutes();
  // usePassport();
  app.use('/api', router);
  // Error handlers
  app.use(errorLogger);
  app.use(errorSender);
  // Listen
  app.listen(PORT, () => {
    console.log(`Server started on ${SERVER_URL} prod:${__prod__}`);
  });
}

function useDefaultRoutes() {
  // app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors({ credentials: true, origin: MAIN_DOMAIN_URL }));
  app.use(
    cookieSession({
      name: 'session',
      secret: process.env.SESSION_SECRET,
      domain: __prod__ ? '.' + DOMAIN : 'localhost',
      maxAge: 24 * 60 * 60 * 1000 * 7, // 7 days
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
