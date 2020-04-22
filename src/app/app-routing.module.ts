import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWeatherComponent } from './dashboard-weather/dashboard-weather.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
