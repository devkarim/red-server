import { fetchMatchesByLeague } from './../services/match';
import express from 'express';
import validate from '../helpers/validator';
import { fetchPopularMatchesToday } from '../services/match';

/**
 * Express router for matches related functions.
 * @namespace matchRouter
 */
const matchRouter = express.Router();

/**
 * @route     GET /api/match/now
 * @desc      Get matches of popular leagues of today
 * @access    Public
 */
matchRouter.get('/now', async (req, res) => {
  const matches = await fetchPopularMatchesToday();
  return res.status(200).json(matches);
});

export default matchRouter;
