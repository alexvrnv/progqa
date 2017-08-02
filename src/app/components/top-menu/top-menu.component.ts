import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {SessionService} from "../../services/session.service";
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {


  user: User;
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {

  }

  performLogout() {
    this.authService.logout();
    this.router.navigate(['/log-in']);
  }

  checkUser():boolean {
    this.user = SessionService.currentUser
    if (this.user) {
      return true;
    }
    return false;
  }


}
