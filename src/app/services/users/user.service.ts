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

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.endpoint+'/'+id);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }

}
