import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridModule } from './data-grid/data-grid.module';
import { HeaderModule } from './header/header.module';
import { SearchModule } from './search/search.module';
import { WeatherMapModule } from './weather-map/weather-map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    DataGridModule,
    SearchModule,
    WeatherMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
