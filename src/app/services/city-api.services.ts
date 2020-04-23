import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityResponse } from '../domains-types/city-types';


@Injectable({ providedIn: 'root' })
export class CityApiService{

  constructor(private http: HttpClient){
  }

  getBrasilianCaptals(): Observable<CityResponse> {
      return this.http.get<CityResponse>(`${environment.baseUrl}/api/city/capitals?countryAcronym=br`);
  }


}
