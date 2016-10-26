import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Weather} from './weather.class';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable( )
export class WeatherService
{    
    private weatherApiURL: string = "http://api.openweathermap.org/data/2.5/weather?appid=67b1a93dfad1908b774ebbd438783fca";
    constructor(private _http:Http ){}
    getWeatherUrl(city:string){ return this.weatherApiURL +"&q="+ city; }
    getWeather(city: string)
     {
        return new Observable(observable => {
            this._http.get(this.getWeatherUrl(city))
            .map(res => res.json())
            .subscribe(res=>{
                if(res.cod == "404"){
                    observable.error(res.message);
                } else {        
                var weather: Weather = res.weather[0];
                weather.city = city;
                    observable.next(weather);
                }
            });
        });
    }

}