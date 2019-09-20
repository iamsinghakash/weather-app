import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMapComponent } from './weather-map.component';


@NgModule({
  declarations: [WeatherMapComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherMapComponent]
})
export class WeatherMapModule { }
