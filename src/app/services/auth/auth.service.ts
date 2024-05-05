import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = "http://localhost:8000/api/users/";

  constructor(private http: HttpClient) { }

  // Backend: HTTP request server URL
  // BaaS/DBaaS: call API db

  logIn() {
    return;
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint, user);
  }
  
}
