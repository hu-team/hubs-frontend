import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string = '';
  private password: string = '';

  constructor() { }

  ngOnInit() {
  }

  private login(f: NgForm) {
    console.log(f.value);
  }
}
