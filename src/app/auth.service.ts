import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private token: string;
  
  constructor(private http: Http) {
    var currUser = JSON.parse(localStorage.getItem('user'));

    if(currUser) {
      this.token = currUser.token;      
    }
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT+'login')
    .map(response => response.json())
    .map((data) => {
      this.token = data.token;
    });
  }
}
