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
  providers: [CityApiService,CityResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
