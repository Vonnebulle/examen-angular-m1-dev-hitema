import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { DetailsComponent } from './details/details.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr-FR');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityWeatherComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: localeFr, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
