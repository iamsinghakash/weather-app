import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_KEY = "65a07ba4187c5ad548dbdd290b91068f";
@Injectable()
export class GetWeatherDetails{
    constructor(private http: HttpClient){}
    getWeatherByCity(cityName: string): Observable<any>{
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + API_KEY;
        return this.http.get(apiUrl);
        }
}