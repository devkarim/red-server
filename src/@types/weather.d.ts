interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainData;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: WeatherCountry;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  [key: string]: number;
}

interface Clouds {
  all: number;
}

interface WeatherCountry {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
