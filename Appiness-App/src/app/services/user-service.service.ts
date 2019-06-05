import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[] = [];
  constructor(private http: HttpClient) {
    // localStorage.setItem('userStored', this.user);
  }

  public registerUser(user) {
    // this.
    this.user.push(user);
    localStorage.setItem('userList', JSON.stringify(this.user));
  }

  public getUser() {
   return JSON.parse(localStorage.getItem('userList'));
  }
}
