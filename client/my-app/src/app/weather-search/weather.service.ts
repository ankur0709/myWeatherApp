import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
	constructor(private _http : Http) {
	}
	getWeather(Cityname:string) : Observable<any[]> {
		
		return this._http.get("http://api.apixu.com/v1/forecast.json?key=82527847143844259a8130350170609&q="+Cityname+"&days=5")
		.map((response: Response)=> <any[]>response.json());
		
	}
	
}


