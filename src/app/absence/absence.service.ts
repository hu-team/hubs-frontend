import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "../auth.service";
import {AppSettings} from "../app-settings";

@Injectable()
export class AbsenceService {

  constructor(private http: Http, private authService: AuthService) { }

  setAbsence(opts) {
    opts.student_id = this.authService.getUser()["student_id"];
    const data = opts
    return this.http.post(AppSettings.API_ENDPOINT + 'absence/absencereports/', data, {
      headers: this.authService.getHeaders()
    });
  }

}
