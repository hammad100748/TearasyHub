import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg:string='';

  constructor(private _registServices:RegistrationService,private _router:Router) { }

  ngOnInit() {
  }

  login(user:any){
    this.errorMsg='';
    this._registServices.loginAdmin(user)
      .subscribe(result=>{
        console.log(result);
        if(result===true)
          this._router.navigate(['/']);
        else
          this.errorMsg = 'Username or password is incorrect';
      },
      err => {
        console.log(err);
        this.errorMsg = 'Username or password is incorrect';
        });
  }
}
