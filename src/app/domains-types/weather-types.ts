import { CityResponse } from './city-types';

export interface WeatherResponse{
  data: Date,
  city: CityResponse,
  nameCity: string
  cloudsPercent: number,
  weatherDescription: string,
  weatherIcon: string,
  temp: number,
  tempMin: number,
  tempMax: number,
  pressure: number,
  humidity: number,
  speedWind: number
}


