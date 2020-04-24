import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardWeatherComponent } from './dashboard-weather/dashboard-weather.component';
import { ChartsModule } from 'ng2-charts';
import { CityResolver } from './resolvers/city.resolver';
import { HttpClientModule } from '@angular/common/http';
import { WeatherResolver } from './resolvers/weather.resolver';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardWeatherComponent,
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule,
    NgxSpinnerModule,

  ],
  providers: [CityResolver,WeatherResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
