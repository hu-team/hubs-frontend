import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import {AuthService} from '../auth.service';
@Injectable()
export class CourseService {

  constructor(private http: Http, private auth: AuthService) { }
  public getcourses() {
    const token = this.auth.getToken();
    const headers = this.auth.getHeaders();

    return this.http.get(AppSettings.API_ENDPOINT + 'school/courses', {
      headers: headers
    })
      .map(this.extractData, this)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();

    const arr = body.results.map((obj) => {

      var newObj = {
        curcode: obj.code,
        curname: obj.name,
      };

      return newObj;
    });

    return arr;
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
