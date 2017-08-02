import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../models/user";

@Injectable()
export class SessionService {

  public static currentUser :User = JSON.parse(localStorage.getItem('currentUser'));

  constructor() {

  }

}
