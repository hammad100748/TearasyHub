import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class RegistrationService {

  constructor(private _http:Http) { }

  registerAdmin(user){
    var _headers=new Headers();
    _headers.append('Content-Type','application/json');
    this._http.post('https://www.terasyshub.io/api/v1/registerAdmin',JSON.stringify(user),{headers:_headers})
      .map((res: Response) => {
        if (res) {
          if (res.status === 201) {
            return [{ status: res.status, json: res }]
          }
          else if (res.status === 200) {
            return [{ status: res.status, json: res }]
          }
        }
      }).catch((error: any) => {
      if (error.status === 500) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 400) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 409) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 406) {
        return Observable.throw(new Error(error.status));
      }
    });
  }
}
