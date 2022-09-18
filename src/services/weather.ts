import axios from 'axios';

export const WEATHER_API_URL = 'https://api.openweathermap.org';
export const WEATHER_ENDPOINT = '/data/2.5/weather';
export const WEATHER_FORECAST_ENDPOINT = '/data/2.5/forecast';
export const GEO_ENDPOINT = '/geo/1.0/direct';

const client = axios.create({
  baseURL: WEATHER_API_URL,
  responseType: 'json',
  params: { appid: process.env.OPEN_WEATHER_API_KEY },
});

export const fetchWeather = async (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  const res = await client.get(WEATHER_ENDPOINT, {
    params: { lat, lon, units: 'metric' },
  });
  return res.data as WeatherResponse;
};

export const fetchWeatherForecast = async (
  lat: number,
  lon: number
): Promise<WeatherForecastResponse> => {
  const res = await client.get(WEATHER_FORECAST_ENDPOINT, {
    params: { lat, lon, units: 'metric' },
  });
  return res.data as WeatherForecastResponse;
};

export const fetchGeoLocation = async (q: string): Promise<GeoResponse> => {
  const res = await client.get(GEO_ENDPOINT, {
    params: { q, limit: 1 },
  });
  return res.data as GeoResponse;
};

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  const geo = await fetchGeoLocation(city);
  const { lat, lon } = geo[0];
  const weather = await fetchWeather(lat, lon);
  return weather;
};

export const fetchWeatherForecastByCity = async (
  city: string
): Promise<WeatherForecastResponse> => {
  const geo = await fetchGeoLocation(city);
  const { lat, lon } = geo[0];
  const weather = await fetchWeatherForecast(lat, lon);
  return weather;
};
