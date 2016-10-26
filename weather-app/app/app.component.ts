import { Component } from '@angular/core';
import {Weather } from './weather.class';
import {WeatherService} from './weather.service';
@Component({
    selector: 'derick', 
    template:
     `
    <div class="container">
    <h1>Weather App</h1>
    <input type="text" [(ngModel)]="city" placeholder="Find the worldwide weather." (keyup)="addCity(city,$event)"  />
    {{city}}
    <div *ngIf="errormessage" class="alert alert-warning">{{errormessage}}</div>  
    <br>
     <ul *ngFor = "let weather of weatherOfCities">          
        <li>    
         <h2>{{weather.city}}</h2>
             <ul>    
                 <li>Weather type: {{weather.main}}</li>
                 <li>Weather Description : {{weather.description}}</li>
             </ul>
         </li> 
     </ul>
     </div>
     
     ` ,
     providers: [WeatherService]
})
export class AppComponent  {
    public city: string;

    public weatherOfCities: Array <Weather> = [];
    public errormessage:  string;
    public weather: Weather;
     constructor(private weatherService: WeatherService)
     {
         this.city= "";
         this.weatherOfCities = []; 
    }
    addCity(city: string, $event)
    { 
        if($event.keyCode == 13 ){
            this.weatherService.getWeather(city)
            
            .subscribe(weather => {
                if(weather)
                {  
                   this.weatherOfCities.push(this.weather);
                    this.errormessage = undefined;
                 }
                 else {
                    var cityWithoutWeather = city;
                    this.errormessage = "No hay datos del clima para" + cityWithoutWeather; 
                }
                this.city= " ";
            },
                 error =>{
                    this.city=" ";
                    this.errormessage = error;
                });
        }
    }
}
