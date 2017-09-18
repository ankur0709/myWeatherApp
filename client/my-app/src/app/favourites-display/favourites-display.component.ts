import { Component, OnInit } from '@angular/core';
import {FavouritesDisplayService} from './favourites-display.service';

@Component({
  selector: 'app-favourites-display',
  templateUrl: './favourites-display.component.html',
  styleUrls: ['./favourites-display.component.css'],
  providers:[FavouritesDisplayService]
})
export class FavouritesDisplayComponent implements OnInit {

  constructor(private favouriteservice:FavouritesDisplayService) { }
  city=[];
  delete=[];
  update:any;
  displayFavourites()
  {
    this.favouriteservice.getData()
    .subscribe(resCityData => this.city=resCityData);
  }

  delFav(favour:any)
  {
    this.favouriteservice.removeData(favour)
    .subscribe(resCityData=>this.delete=resCityData)
  }

  ngOnInit() {
  	this.displayFavourites(); 
  }

  updateFav(favour:any)
  {
    this.update=favour;
  }
}
