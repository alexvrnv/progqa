import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  curUser: User;
  user: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    console.log(SessionService.currentUser);
    this.activatedRoute.params.subscribe(params => {
      this.getUser(params['id']);
      this.curUser = SessionService.currentUser;
    });
  }

  ngOnInit() {
  }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  performUser() {
    SessionService.currentUser = this.curUser;
    localStorage.setItem('currentUser', JSON.stringify(this.curUser));
    this.userService.updateUser(this.curUser).subscribe();
  }
}
