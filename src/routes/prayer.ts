import { prayerNowQuery } from './../models/prayer';
import { fetchPrayersByCity } from './../services/prayer';
import express from 'express';
import validate from '../helpers/validator';

/**
 * Express router for prayers related functions.
 * @namespace prayerRouter
 */
const prayerRouter = express.Router();

/**
 * @route     GET /api/prayer/now
 * @desc      Get prayers for present day
 * @access    Public
 * @param {string} city - City name
 * @param {string} country - Country name / 2 character alpha ISO 3166 code (United Kindom / GB)
 */
prayerRouter.get('/now', async (req, res) => {
  const { city, country } = await validate(prayerNowQuery, req.query);
  const prayers = await fetchPrayersByCity(city, country);
  const day = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
  });
  for (const p of prayers.data) {
    if (p.date.gregorian.day == day) {
      return res.status(200).json(p);
    }
  }
  return res.status(200).json(prayers.data[0]);
});

export default prayerRouter;
