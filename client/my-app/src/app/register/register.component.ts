import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
info:any;
refer:any;
data:any={};
  
  constructor(private registerService: RegisterService,private router:Router) { }

  ngOnInit() {
  }

storedata(data:any)
{
  if(data.email===undefined || data.password===undefined ||data.cpassword===undefined)
  {
    alert("Enter all fields");
  }
  else {
  this.registerService.registerdata(data)
  .subscribe((refer)=>this.info=refer);
  this.router.navigateByUrl('/login');
  console.log(this.info);
}

}
}