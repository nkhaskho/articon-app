import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // fake store
  users: User[] = [];

  constructor() { }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

}
