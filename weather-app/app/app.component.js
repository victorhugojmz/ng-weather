"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_service_1 = require('./weather.service');
var AppComponent = (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.weatherOfCities = [];
        this.city = "";
        this.weatherOfCities = [];
    }
    AppComponent.prototype.addCity = function (city, $event) {
        var _this = this;
        if ($event.keyCode == 13) {
            this.weatherService.getWeather(city)
                .subscribe(function (weather) {
                if (weather) {
                    _this.weatherOfCities.push(weather);
                    _this.errormessage = undefined;
                }
                else {
                    var cityWithoutWeather = city;
                    _this.errormessage = "No hay datos del clima para" + cityWithoutWeather;
                }
                _this.city = " ";
            }, function (error) {
                _this.city = " ";
                _this.errormessage = error;
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n    <h1>Weather App</h1>\n    <input type=\"text\" [(ngModel)]=\"city\" placeholder=\"Find the worldwide weather.\" (keyup)=\"addCity(city,$event)\"  />\n    {{city}}\n    <div *ngIf=\"errormessage\" class=\"alert alert-warning\">{{errormessage}}</div>  \n    <br>\n     <ul *ngFor = \"let weather of weatherOfCities\">          \n        <li>    \n         <h2>{{weather.city}}</h2>\n             <ul>    \n                 <li>Weather type: {{weather.main}}</li>\n                 <li>Weather Description : {{weather.description}}</li>\n             </ul>\n         </li> \n     </ul>\n     </div>\n     \n     ",
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map