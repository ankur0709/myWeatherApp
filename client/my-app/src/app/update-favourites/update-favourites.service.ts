import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import  {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateFavouritesService {

  constructor(private http:Http) { }
  updatefavourdata(favouriteupdate:any , max_temp:string) :Observable<any>
  {

   const favUrl="http://localhost:8080/updates/"+max_temp;
   console.log(favUrl);
   return this.http
   .put(favUrl,favouriteupdate)
   .map((res:Response)=> {
						alert("updated....Please refresh");
						return <any[]>res.json();
					});

  }

}


