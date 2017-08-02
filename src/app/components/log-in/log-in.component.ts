import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  newEmail: string = '';
  newPassword: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  performLogin(){
    let newRouter = this.router;
    this.authService.login(this.newEmail, this.newPassword, function(){
        SessionService.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        newRouter.navigate(['profile/' +  SessionService.currentUser._id]);
      });
  }
}
