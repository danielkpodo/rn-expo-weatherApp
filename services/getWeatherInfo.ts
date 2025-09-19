import { WeatherForecastResponse } from '@/hooks/useWeatherForecast';
import { apiClient } from './apiClient';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

const DAILY_FORECAST = 'temperature_2m_max,temperature_2m_min,weathercode';
const TIMEZONE = 'auto';
const FORECAST_DAYS = 7;

export const getWeatherInfo = async (params: Coordinates) => {
  try {
    const response = await apiClient.get<WeatherForecastResponse>('/forecast', {
      params: {
        latitude: params.latitude,
        longitude: params.longitude,
        daily: DAILY_FORECAST,
        timezone: TIMEZONE,
        forecast_days: FORECAST_DAYS,
      },
    });

    const data = response.data;
    const normalizedForecast = response.data.daily.time.map((date, index) => {
      return {
        date,
        max: data.daily.temperature_2m_max[index],
        min: data.daily.temperature_2m_min[index],
        code: data.daily.weathercode[index],
      };
    });

    return { ...data, normalizedForecast };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
