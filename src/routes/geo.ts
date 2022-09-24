import { fetchLocationByCoords } from '../services/weatherGeo';
import express from 'express';
import validate from '../helpers/validator';
import { geoQuery } from '../models/geo';

/**
 * Express router for geocoding related functions.
 * @namespace geoRouter
 */
const geoRouter = express.Router();

/**
 * @route     GET /api/geo
 * @desc      Get name of location by coords
 * @access    Public
 * @param {string} lat - Latitude of location
 * @param {string} lon - Longitude of location
 */
geoRouter.get('/', async (req, res) => {
  const { lat, lon } = await validate(geoQuery, req.query);
  const location = await fetchLocationByCoords(lat, lon);
  return res.status(200).json(location);
});

export default geoRouter;
