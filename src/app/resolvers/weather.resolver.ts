import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CityResponse } from '../domains-types/city-types';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../domains-types/weather-types';
import { WeatherApiService } from '../services/weather-api.services';

@Injectable()
export class WeatherResolver implements Resolve<WeatherResponse> {

  constructor(private weatherApiService : WeatherApiService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<WeatherResponse>  {
     return this.weatherApiService.getCurrentWeather("curitiba","br");

     //route.paramMap.get('id')
  }

}
