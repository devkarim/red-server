import express from 'express';
import authRouter from './auth';

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
  return res.send('hello world');
});

rootRouter.use('/auth', authRouter);

export default rootRouter;
