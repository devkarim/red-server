import express from 'express';
import authRouter from './auth';
import prayerRouter from './prayer';
import weatherRouter from './weather';
import geoRouter from './geo';
import matchRouter from './match';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('hello world');
});

router.use('/auth', authRouter);
router.use('/prayer', prayerRouter);
router.use('/weather', weatherRouter);
router.use('/geo', geoRouter);
router.use('/match', matchRouter);

export default router;
