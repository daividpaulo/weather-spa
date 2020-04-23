import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../domains-types/weather-types';


@Injectable({ providedIn: 'root' })
export class WeatherApiService{

  constructor(private http: HttpClient){
  }

  getCurrentWeather(cityName:String , countryAcronym:string ): Observable<WeatherResponse> {
      return this.http.get<WeatherResponse>
           (`${environment.baseUrl}/api/weather/current?cityName=`+cityName+'&countryAcronym='+ countryAcronym);
  }


}
