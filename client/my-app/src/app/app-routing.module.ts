import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavouritesDisplayComponent} from './favourites-display/favourites-display.component'
import {HomeComponent} from './home/home.component';
import { WeatherSearchComponent }from './weather-search/weather-search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

const routes: Routes = [
{path: '', component: WelcomeComponent},
  { path: 'search',  component: HomeComponent },
  { path: 'favourites',  component: FavouritesDisplayComponent},
  { path: 'register',  component: RegisterComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'navbar',  component: NavbarMenuComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

