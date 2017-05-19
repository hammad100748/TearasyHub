import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./app-routing.module";
import { RegisterComponent } from './components/register/register.component';
import {RegistrationService} from "./services/registration.service";
import { EqualValidatorDirective } from './equal-validator.directive';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterComponent,
    EqualValidatorDirective,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent],

})
export class AppModule { }
