import { Coordinates, getWeatherInfo } from '@/services/getWeatherInfo';
import { useQuery } from '@tanstack/react-query';

export interface DailyForecast {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface DailyUnits {
  time: 'iso8601';
  temperature_2m_max: '°C';
  temperature_2m_min: '°C';
  weathercode: 'wmo code';
}

export interface NormalizedForecast {
  date: string;
  max: number;
  min: number;
  code: number;
}

export interface WeatherForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: DailyForecast;
  normalizedForecast?: NormalizedForecast[];
}

const useWeatherForecast = (coords: Coordinates) => {
  return useQuery<WeatherForecastResponse, Error>({
    queryKey: ['weather-forecast', coords.latitude, coords.longitude],
    queryFn: () => getWeatherInfo(coords),
  });
};

export default useWeatherForecast;
