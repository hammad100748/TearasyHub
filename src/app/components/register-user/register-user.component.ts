import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private regService:RegistrationService) { }

  ngOnInit() {
  }

  save(user,valid:boolean){
    if(valid){
      user['devices']={};
      this.regService.registerUser(user)
        .subscribe(res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        })
    }
  }


}
