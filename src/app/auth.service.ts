import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: Http) {
    const currUser = JSON.parse(localStorage.getItem('user'));

    if(currUser) {
      console.log(currUser);
      this.token = currUser.token;
    }
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT+ 'core/auth/obtain', {
      username: username,
      password: password
    })
    .map(response => response.json())
    .map((data) => {
      this.token = data.token;
      localStorage.setItem('user', JSON.stringify({
        user: this.token
      }));
    });
  }

  public isLoggedIn() {
    const token = JSON.parse(localStorage.getItem('user'));

    if(token) {
      console.log("tes");
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
}
