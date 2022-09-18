import { prayerNowQuery } from './../models/prayer';
import { fetchPrayersByLoc } from './../services/prayer';
import express from 'express';
import validate from '../helpers/validator';
import parsePrayersRes from '../parsers/prayer';

/**
 * Express router for prayers related functions.
 * @namespace prayerRouter
 */
const prayerRouter = express.Router();

/**
 * @route     GET /api/prayer/now
 * @desc      Get prayers for present day
 * @access    Public
 * @param {number} lat - Latitude of location
 * @param {number} lon - Longitude of location
 * @param {number} day - Day of month
 */
prayerRouter.get('/now', async (req, res) => {
  const { lat, lon, day } = await validate(prayerNowQuery, req.query);
  const prayersRes = await fetchPrayersByLoc(+lat, +lon);
  const prayers = parsePrayersRes(prayersRes, day);
  return res.status(200).json(prayers);
});

export default prayerRouter;
