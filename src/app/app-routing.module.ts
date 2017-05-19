/**
 * Created by Hammad on 01/05/2017.
 */
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RouterModule,Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {RegisterComponent} from "./components/register/register.component";
import {RegisterUserComponent} from "./components/register-user/register-user.component";



const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'registeruser',component:RegisterUserComponent},
  // {path:'employee/:id',component:PassDataComponentComponent},
  // If wrong link enters this will execute
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
export const routingComponents=[HomeComponent,LoginComponent,PageNotFoundComponent,RegisterComponent];
