import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username = '';
  private password = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['/overview']);
    }
  }

  private login(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;

    this.auth.login(username, password)
    .subscribe((data) => {
      this.router.navigate(['/overview']);
    });
  }
}
