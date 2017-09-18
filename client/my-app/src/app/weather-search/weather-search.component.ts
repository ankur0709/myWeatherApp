import { Component } from '@angular/core';
import { WeatherService } from '../weather-search/weather.service';
import {Output, EventEmitter } from '@angular/core'; 

@Component({
	selector:'weather-search',
	templateUrl: 'weather-search.component.html',
	styleUrls: ['weather-search.component.css'],
	outputs:[`childEvent`],

})

export class WeatherSearchComponent{
	@Output() childEvent=new EventEmitter();

	Cityname: string;
	Weather : any =[];

	constructor(private weatherService: WeatherService) {}
	
	Search(){
		this.weatherService.getWeather(this.Cityname)
		.subscribe(resweatherData =>this.childEvent.emit(resweatherData));
		
	}
}
