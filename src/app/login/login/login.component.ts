import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder, FormGroup} from '@angular/forms';
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
  isFormSubmit : boolean = false;
  nietLeeg : boolean = false;
  nietJuist : boolean = false;

  constructor(private auth: AuthService, private router: Router, private fb : FormBuilder) {
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/overview']);
    }
  }

  private login(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;
    this.clearMessage();
    if(username == '' || password == ''){
      this.nietLeeg = true;
      this.isFormSubmit = true;
      return;
    }

    this.auth.login(username, password)
      .subscribe((data) => {
      this.auth.setLocalStorageItem();
        this.router.navigate(['/overview']);
        console.log("test", data);
      },
    err => {
      this.nietJuist = true;
      this.isFormSubmit = true;
    })
  }
  clearMessage() {
      this.isFormSubmit = false;
      this.nietJuist = false;
      this.nietLeeg = false;
    }
}


