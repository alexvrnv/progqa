import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newEmail: string = '';
  newPassword: string = '';
  newDisplayName: string = '';
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    let as = this.authService;
    let ne = this.newEmail;
    let np = this.newPassword;
    let ro = this.router;
    this.userService.createUser(this.newDisplayName, this.newEmail, this.newPassword).subscribe(function () {
      as.login(ne, np, function() {
        SessionService.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        ro.navigate(['profile/' +  SessionService.currentUser._id]);
      })
    });

  }
}
