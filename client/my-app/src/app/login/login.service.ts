import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  logindata(data:any)
  {
  	 const getexpressurl="http://localhost:8080/find";
  	 return this.http
  	 .post(getexpressurl,data)
  	 .map((response:Response)=>{
  	 	console.log(response);
  	 	return (<any>response.json());
});
}
}





