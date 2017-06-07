import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import {AuthService} from '../auth.service';


@Injectable()
export class StudentService {

  constructor(private http: Http, private auth: AuthService) { }

 public getSudents(){
   const token = this.auth.getToken();
   const headers = this.auth.getHeaders();
   return this.http.get(AppSettings.API_ENDPOINT + 'core/students', {
     headers: headers
   }).map((res: Response) => {
     const body = res.json();
     return body.results;
   })
     .catch(this.handleError);
 }

  public getStudentById(id) {
    const token = this.auth.getToken();
    const headers = this.auth.getHeaders();
    return this.http.get(AppSettings.API_ENDPOINT + 'core/students/' + id + '/', {
      headers: headers
    }).map((res: Response) => {
      const body = res.json();
      return body;
    })
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
