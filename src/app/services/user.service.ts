import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
@Injectable()

export class UserService {
  private apiUrl = 'https://progqaserver.herokuapp.com/';

  constructor(private http: Http) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.apiUrl + 'users')
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUserById(_id: string): Observable<User> {
    return this.http.get(this.apiUrl+ 'users/' + _id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createUser(displayName:string, email: string, password: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    return this.http.post(this.apiUrl + 'users', JSON.stringify({display_name: displayName, email: email,
      password: password}), options)
      .catch(this.handleError);
  }

  updateUser(user: User) {
    return this.http.put(this.apiUrl + 'sf/users/' + user._id, {display_name: user.display_name,
      last_name: user.last_name, first_name: user.first_name, working_position: user.working_position,
      token: JSON.parse(localStorage.getItem('token'))}, null)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error', error);
    return Observable.throw(error.message || error);
  }


}
