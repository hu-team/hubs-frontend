import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppSettings } from '../app-settings';
import {AuthService} from '../auth.service';


@Injectable()
export class LessonService {

  constructor(private http: Http, private auth: AuthService) { }

  public getLessons() {
    const token = this.auth.getToken();
    const headers = this.auth.getHeaders();

    return this.http.get(AppSettings.API_ENDPOINT + 'school/lessons', {
      headers: headers
    })
      .map(this.extractData, this)
      .catch(this.handleError);
  }
  public getLessonById(id) {
    const token = this.auth.getToken();
    const headers = this.auth.getHeaders();

    return this.http.get(AppSettings.API_ENDPOINT + 'school/lessons?id=' + id, {
      headers: headers
    })
      .map(this.extractData, this)
      .catch(this.handleError);
  }
  getResults(id){
    return this.http.get(AppSettings.API_ENDPOINT + '/school/results?student='+ id, {
      headers: this.auth.getHeaders()
    })
      .map((res: Response) => {
        const body = res.json();
        return body.results;
      })
      .catch(this.handleError);
  }

  public getTime(time: Date) {
    const currTime = new Date(time);
    const toString = currTime.getHours() + ':' + currTime.getMinutes() + currTime.getMinutes();

    return toString;
  }

  private extractData(res: Response) {
    const body = res.json();

    const arr = body.results.map((obj) => {
      const start = this.getTime(obj.start);
      const stop = this.getTime(obj.end);

      var newObj = {
        id: obj.id,
        curcode: obj.course.code,
        curname: obj.course.name,
        group: obj.group.code,
        students: obj.group.students,
        start: start,
        stop: stop,
        room: obj.room
      };

      return newObj;
    })
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
