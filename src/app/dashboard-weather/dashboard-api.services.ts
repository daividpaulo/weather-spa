import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityResponse } from './dashboard-type';

@Injectable({ providedIn: 'root' })
export class DashboartApiService{

  constructor(private http: HttpClient){

  }

  getCurrentWeatherByNameCity(name: string):Observable<CityResponse>{
    return this.http.get<CityResponse>(`${environment.baseUrl}/api/city/capitals`);
  }

  getHistoryWeathById(id:number):Observable<CityResponse>{
    return this.http.get<CityResponse>(`${environment.baseUrl}/api/city/capitals`);
  }

  getCaptals(id: number): Observable<CityResponse> {
      return this.http.get<CityResponse>(`${environment.baseUrl}/api/city/capitals`);
  }


}
