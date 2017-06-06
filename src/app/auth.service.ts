import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
// import {setInterval} from "timers";

@Injectable()
export class AuthService {
  private token: string;
  private user: object;

  constructor(private http: Http, private router:Router) {
    const currUser = JSON.parse(localStorage.getItem('user'));

    if(currUser) {
      this.token = currUser.token;
      this.refreshToken();
    }

    setInterval(() => {
      this.refreshToken();
    },300000);
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT+ 'core/auth/obtain', {
      username: username,
      password: password
    })
    .map(response => response.json())
    .map((data) => {
      this.token = data.token;
      this.user = data.user;
    });
  }

  public logout (){
    const user = localStorage.removeItem('user');
    if(user){
      this.router.navigate(['/login']);
    }

  }
  public isLoggedIn() {
    const token = JSON.parse(localStorage.getItem('user'));

    if(token) {
      this.token = token.user;
      return true;
    } else {
      return false;
    }
  }

  public getToken() {
    return this.token;
  }

  public getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.token);

    return headers;
  }

  public setLocalStorageItem() {
    localStorage.setItem('user', JSON.stringify({
      user: this.token
    }));
  }

  public refreshToken() {
    if(this.token) {
      this.http.post(AppSettings.API_ENDPOINT + 'core/auth/refresh', {
        token: this.token
      })
        .map(response => {
          return response.json();
        })
        .map(data => {
          const json = data;
          this.token = json.token;
        })
        .subscribe(() => {
          this.setLocalStorageItem();
        });
    }
  }
}
