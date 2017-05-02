import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./app-routing.module";
import { RegisterComponent } from './components/register/register.component';
import {RegistrationService} from "./services/registration.service";
import { EqualValidatorDirective } from './equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterComponent,
    EqualValidatorDirective
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
