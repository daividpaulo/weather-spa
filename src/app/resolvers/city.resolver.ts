import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CityApiService } from '../services/city-api.services';
import { CityResponse } from '../domains-types/city-types';
import { Observable } from 'rxjs';

@Injectable()
export class CityResolver implements Resolve<CityResponse> {

  constructor(private cityApiService : CityApiService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<CityResponse>  {
     return this.cityApiService.getBrasilianCaptals();
  }

}
