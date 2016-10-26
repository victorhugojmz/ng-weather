import {WeatherInterface} from './weather.interface';
export class Weather implements WeatherInterface
{
    constructor( public id: number , public  city:  string , public   main: string , public  description: string )
    {

    }
}