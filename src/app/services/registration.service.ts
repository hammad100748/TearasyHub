import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RegistrationService {

  constructor(private _http:Http) { }
  public token: string;

  registerAdmin(user){
    var _headers=new Headers();
    _headers.append('Content-Type','application/json');
    this._http.post('https://www.terasyshub.io/api/v1/registerAdmin',JSON.stringify(user),{headers:_headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  loginAdmin(user):Observable<boolean>{

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body=JSON.stringify(user);

    return this._http.post('https://www.terasyshub.io/api/v1/login',body,options)
      .map((res:Response)=>{
        if(res.status===200){
          let token=res.text();
          if(token){
            this.token=token;
            localStorage.setItem('currentUser',JSON.stringify({email:user.email,token:token}));
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      })
      .catch(this.handleError);

  }

  logoutAdmin(){
    this.token=null;
    localStorage.removeItem('currentUser');
  }

  registerUser(user){

    let token=JSON.parse(localStorage.getItem('currentUser'));
    console.log(token.token);
    let headers = new Headers({ 'Authorization': 'Bearer ' + token.token });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('https://www.terasyshub.io/api/v1/register',JSON.stringify(user),options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(err){

    let errMesg:string;
    if(err instanceof Response){

      let body=err.json() || '';
      let error= body.error || JSON.stringify(body);
      errMesg= `${err.status}-${err.statusText || ''} ${error}`

    }else{
      errMesg=err.message? err.message : err.toString();
    }
    // return Observable.throw(err.json().data || "Server Error.");
    return Observable.throw(errMesg);

  }

}
