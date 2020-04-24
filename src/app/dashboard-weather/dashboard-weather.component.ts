import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {  ActivatedRoute } from '@angular/router';
import { CityResponse } from '../domains-types/city-types';
import { WeatherApiService } from '../services/weather-api.services';
import { WeatherResponse } from '../domains-types/weather-types';
import { Observable, timer, of,interval } from 'rxjs';
import { map, takeWhile, take } from "rxjs/operators";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-dashboard-weather',
  templateUrl: './dashboard-weather.component.html',
  styleUrls: ['./dashboard-weather.component.css']
})
export class DashboardWeatherComponent implements OnInit {

  cities: CityResponse[] = [];
  hourlyWeather: WeatherResponse[] = [];
  selectedCity: CityResponse;
  actualWeather: WeatherResponse;
  diplay = "";

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions = {responsive: true};
  lineChartColors: Color[] = [];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

constructor(private actRoute:ActivatedRoute,
              private weatherApiService:WeatherApiService,
              private spinner: NgxSpinnerService) {

       this.actRoute.data.subscribe(data => {
       this.cities = data.capitalsCities;
       this.actualWeather = data.defaultWeather;
       this.selectedCity = this.cities.find(x=>{return x.idCity==this.actualWeather.city.idCity});
       this.loadHistoryWeather(this.selectedCity.idCity);
    })
}



ngOnInit(): void {
  this.acticveCountDown(15);
}


acticveCountDown(minutes){
  this.countdown(minutes).subscribe(next => {

    if(next.minutes<=0 && next.seconds<=0) {
         this.loadCurrentWeather(this.selectedCity);
         this.loadHistoryWeather(this.selectedCity.idCity);
         this.acticveCountDown(minutes);
    }
    this.diplay = next.display;
  });
}


changeCity(newSelectedCity){
   this.loadCurrentWeather(newSelectedCity);
   this.loadHistoryWeather(this.selectedCity.idCity);
}


loadHistoryWeather(idCity){

  if(!idCity || idCity<=0) return null;
  this.spinner.show();

  this.weatherApiService.getHourlyToDayWeather(idCity).subscribe(res=>{
    if(!res) return null;
    this.hourlyWeather = res;
    this.updateGraph();
    this.spinner.hide();
  });

}

loadCurrentWeather(city){

    if(!city || !city.name ||  city.name == "" ) return null;

    this.spinner.show();

    this.weatherApiService.getCurrentWeather(city.name, city.country).subscribe(res=>{
       if(!res) return null;
       this.actualWeather = res;
       this.spinner.hide();
    });

}


 countdown(minutes: number, delay: number = 0) {
   return new Observable<{ display: string; minutes: number; seconds: number }>(
      subscriber => {
        timer(delay, 1000)
          .pipe(take(minutes * 60))
          .pipe(map(v => minutes * 60 - 1 - v))
          .pipe(takeWhile(x => x >= 0))
          .subscribe(countdown => { // countdown => seconds
            const minutes = Math.floor(countdown / 60);
            const seconds = countdown - minutes * 60;

            subscriber.next({
              display: `${("0" + minutes.toString()).slice(-2)}:${("0" + seconds.toString()).slice(-2)}`,
              minutes,
              seconds
            });

            if (seconds <= 0 && minutes <= 0) {
              subscriber.complete();
            }
       });
   });
}


updateGraph(){

  var valuesGraph = [];
  var newLabels : Label[] = [];

  this.hourlyWeather.forEach(i=>{
     valuesGraph.push(i.temp);
     var itemDate = new Date(i.data);
     newLabels.push(this.getTimeString(itemDate));
  });

  this.lineChartLabels = newLabels;
  this.lineChartData = [{ data: valuesGraph, label: 'Temperature ºC' }];

}

getTimeString(itemDate){

  var hours    = itemDate.getHours() <= 9 ? "0" + itemDate.getHours() : itemDate.getHours() ;
  var minutes  = itemDate.getMinutes() <= 9 ? "0" + itemDate.getMinutes() : itemDate.getMinutes() ;

  return hours + ":" + minutes ;

}




}
