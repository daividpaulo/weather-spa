import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {  ActivatedRoute } from '@angular/router';
import { CityResponse } from '../domains-types/city-types';
import { WeatherApiService } from '../services/weather-api.services';
import { WeatherResponse } from '../domains-types/weather-types';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dashboard-weather',
  templateUrl: './dashboard-weather.component.html',
  styleUrls: ['./dashboard-weather.component.css']
})
export class DashboardWeatherComponent implements OnInit {

  cities: CityResponse[] = [];
  selectedCity: CityResponse;
  actualWeather: WeatherResponse;

  constructor(private actRoute:ActivatedRoute,
              private weatherApiService:WeatherApiService) {

    this.actRoute.data.subscribe(data => {
       this.cities = data.capitalsCities;
    })


  }

  ngOnInit(): void {

  }

  changeCity(newSelectedCity){
     this.loadCurrentWeather(newSelectedCity);
  }


  loadCurrentWeather(city){

    this.actualWeather = null;
    if(!city || !city.name ||  city.name == "" ) return null;

    this.weatherApiService.getCurrentWeather(city.name, city.country).subscribe(res=>{

       if(!res) return null;

       this.actualWeather = res;

    });

  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Temp' },
    { data: [90, 82, 88, 85, 87, 85], label: 'Temp Max' },
    { data: [60, 62, 68, 65, 67, 65], label: 'Temp Min' },
  ];

  lineChartLabels: Label[] = ['30/03/2020', '31/03/2020', '01/04/2020', '02/04/2020', '03/04/2020', '04/04/2020'];

  lineChartOptions = {
    responsive: true,
  };

  /*lineChartColors: Color[] = [
    {
      borderColor: 'black',
     // backgroundColor: 'white' //'rgba(255,255,0,0.28)',
     }
   ];*/

   lineChartLegend = true;
   lineChartPlugins = [];
   lineChartType = 'line';


}
