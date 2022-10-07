import express from 'express';
import validate from '../helpers/validator';
import { matchesNowQuery } from '../models/match';
import { fetchPopularMatches } from '../services/match';

/**
 * Express router for matches related functions.
 * @namespace matchRouter
 */
const matchRouter = express.Router();

/**
 * @route     GET /api/match/now
 * @desc      Get matches of popular leagues of specific date
 * @access    Public
 */
matchRouter.get('/now', async (req, res) => {
  const { date } = await validate(matchesNowQuery, req.query);
  const matches = await fetchPopularMatches(date);
  return res.status(200).json(matches);
});

export default matchRouter;
