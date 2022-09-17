import express from 'express';
import authRouter from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('hello world');
});

router.use('/auth', authRouter);

export default router;
