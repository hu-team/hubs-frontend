import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
 
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string = '';
  private password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  private login(f: NgForm) {
    this.auth.login('hallo', "doei")
    .subscribe((data) => {
      console.log("asasas");
    });
  }
}
