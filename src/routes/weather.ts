import { weatherQuery } from '../models/weather';
import {
  fetchWeatherByCity,
  fetchWeatherForecastByCity,
} from './../services/weather';
import express from 'express';
import validate from '../helpers/validator';

/**
 * Express router for prayers related functions.
 * @namespace weatherRouter
 */
const weatherRouter = express.Router();

/**
 * @route     GET /api/weather/now
 * @desc      Get weather now
 * @access    Public
 * @param {string} city - City name / query to search
 */
weatherRouter.get('/now', async (req, res) => {
  const { city } = await validate(weatherQuery, req.query);
  const weather = await fetchWeatherByCity(city);
  return res.status(200).json(weather);
});

/**
 * @route     GET /api/weather/forecast
 * @desc      Get weather forecast
 * @access    Public
 * @param {string} city - City name / query to search
 */
weatherRouter.get('/forecast', async (req, res) => {
  const { city } = await validate(weatherQuery, req.query);
  const weather = await fetchWeatherForecastByCity(city);
  return res.status(200).json(weather);
});

export default weatherRouter;
