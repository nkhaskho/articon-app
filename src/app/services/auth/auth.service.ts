import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredential } from 'src/app/models/login-credential';
import { LoginResponse } from 'src/app/models/login-response';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = "http://localhost:8000/api/users/";
  authEndpoint = "http://localhost:8000/api/auth/";

  constructor(private http: HttpClient) { }

  logIn(credentials: LoginCredential): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authEndpoint, credentials);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint, user);
  }

  parseJwt (token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
}
