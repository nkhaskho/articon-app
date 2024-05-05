import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // fake store
  users: User[] = [];

  endpoint = "http://localhost:8000/api/users";

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }

}
