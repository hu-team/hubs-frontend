import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice : AuthService) {

  }

  ngOnInit() {
  }
logout(){
    this.authservice.logout();
}
}
