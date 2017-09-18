import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './appcomponent/app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherService } from './weather-search/weather.service';
import {FormsModule} from '@angular/forms';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { SearchDetailService} from './weather-detail/search-detail.service';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { AppRoutingModule }     from './app-routing.module';
import { FavouritesDisplayComponent } from './favourites-display/favourites-display.component';
import { HomeComponent } from './home/home.component';
import { UpdateFavouritesComponent } from './update-favourites/update-favourites.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
	declarations: [
	AppComponent, WeatherSearchComponent, WeatherListComponent, WeatherDetailComponent, NavbarMenuComponent, FavouritesDisplayComponent, HomeComponent, UpdateFavouritesComponent, RegisterComponent, LoginComponent, WelcomeComponent
	],
	imports: [
	BrowserModule , HttpModule ,FormsModule ,AppRoutingModule
	],
	providers: [WeatherService , SearchDetailService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
