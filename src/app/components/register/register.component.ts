import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RegistrationService} from "../../services/registration.service";
import {User} from "../../user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  email='';
  username= 'ok';
  password= '';
  confirmPassword= '';

  constructor(private _registerService:RegistrationService) { }

  ngOnInit() {
    // this.user=new User();
    // this.user = {
    //   email:'',
    //   username: '',
    //   password: '',
    //   confirmPassword: '',
    //   // profile:{firstname:'',lastname:''}
  // }

  }

  save(f, isValid: boolean) {
      if(isValid){
        var user={
          password:f.password,
          password_confirm:f.confirmPassword,
          email:f.email,
          profile:{
            firstname:f.firstname,
            lastname: f.lastname
          },
          key:"8JadZIptT2ysZPKQUAdBWw.lwewT8M4"
        };
        this._registerService.registerAdmin(user);
      }
  }

}
