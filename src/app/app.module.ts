import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardWeatherComponent } from './dashboard-weather/dashboard-weather.component';
import { ChartsModule } from 'ng2-charts';
import { CityApiService } from './services/city-api.services';
import { CityResolver } from './resolvers/city.resolver';
import { HttpClientModule } from '@angular/common/http';
import { WeatherResolver } from './resolvers/weather.resolver';


@NgModule({
  declarations: [
    AppComponent,
    DashboardWeatherComponent,
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [CityResolver,WeatherResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
