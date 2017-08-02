import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {UserService} from "../services/user.service";

@Injectable()
export class NotAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (!localStorage.getItem('currentUser')) {

      return true;
    }
    this.router.navigate(['/profile/' + JSON.parse(localStorage.getItem('currentUser'))._id]);
    return false;
  }
}
