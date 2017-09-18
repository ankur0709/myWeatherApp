import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RegisterService {

  constructor(private http:Http) { }
  registerdata(data:any)
  {
  	 const getexpressurl="http://localhost:8080/add";
  	 return this.http
  	 .post(getexpressurl,data)
  	 .map((response:Response)=>{console.log(<any>response.json()); 	
  
});
}
}



