import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavouritesDisplayService {
	private expressurl="http://localhost:8080";
	constructor(private http : Http) { }

	getData()
	{
		 return this.http.get(this.expressurl+'/fetch')
		.map((response: Response)=> response.json());
		
	}

	removeData(favour:any)
	{
		 console.log(this.expressurl+'/deletes/'+favour.date+'/'+favour.city);
		 return this.http.delete(this.expressurl+'/deletes/'+favour.date+'/'
		 	   +favour.city)
       .map((res:Response)=>{console.log(res.json());
       	return <any[]> res.json()
       });
   }

   updateFav(favour:any)
  {
    return 1;
  }
	}



