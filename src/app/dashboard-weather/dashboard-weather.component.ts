import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-weather',
  templateUrl: './dashboard-weather.component.html',
  styleUrls: ['./dashboard-weather.component.css']
})
export class DashboardWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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
