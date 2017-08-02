import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {UserService} from "./user.service";
import {SessionService} from "./session.service";

@Injectable()
export class AuthService {

  public token: string;
  constructor(private http: Http) { }

  login(email: string, password: string, cb) {
    return this.http.post('https://progqaserver.herokuapp.com/auth', { email: email, password: password })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify(response.json().user));
          localStorage.setItem('token', JSON.stringify(response.json().token));
          cb();
          return true;

        } else {
          return false;
        }
      }).subscribe();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token')
    SessionService.currentUser = null;
  }
}
