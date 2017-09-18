import { Component, OnInit, Input } from '@angular/core';
import {UpdateFavouritesService} from '../update-favourites/update-favourites.service';
@Component({
  selector: 'app-update-favourites',
  templateUrl: './update-favourites.component.html',
  styleUrls: ['./update-favourites.component.css'],
  providers:[UpdateFavouritesService]
})
export class UpdateFavouritesComponent implements OnInit {

@Input() favouriteupdate : any;
          updateData: string;


  constructor(private favouriteupdatedata: UpdateFavouritesService) { }
  data:any;
  ngOnInit() {
  }
  updateFav(favouritedata:any)
  {
   this.favouriteupdatedata.updatefavourdata(favouritedata,this.updateData)
   .subscribe(refer=>this.data=refer);
   
  }

}
