import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWeatherComponent } from './dashboard-weather/dashboard-weather.component';
import { CityResolver } from './resolvers/city.resolver';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    component: DashboardWeatherComponent,
    resolve: { capitalsCities : CityResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
