import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GetWeatherDetails } from '../services/get-weather.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  cityName: string;
  record: any;
  columns:any;
  weatherList = [];
  @ViewChild('minmaxtemp', {static: false}) minmaxtempRef: TemplateRef<any>;

  constructor(private getWeatherDetails: GetWeatherDetails) { }

  ngOnInit() {
  }
  getWeatherHistory(){
    this.getWeatherDetails.getWeatherByCity(this.cityName).subscribe(data => {
      this.weatherList.push({
        weather: data.weather[0].main, temperature: data.main.temp - 273,
        mintemp: data.main.temp_min - 273, maxtemp: data.main.temp_max - 273,
        pressure: data.main.pressure, airspeed: data.wind.speed
      });
      this.columns = [
        {headerText: 'Weather', dataKey: 'weather'},
        {headerText: 'Temperature', dataKey: 'temperature'},
        {headerText: 'Min/Max Temperature', dataKey: 'NA', template: this.minmaxtempRef},
        {headerText: 'Pressure', dataKey: 'pressure'},
        {headerText: 'Air speed', dataKey: 'airspeed'}
      ];
    });
  }
}
