import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  } from "@angular/core/";
import { IonContent, IonHeader, IonTitle, IonToolbar, MenuController, IonGrid, IonCol, IonList, IonItem, IonLabel, IonInput, IonButton, IonText, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginCredential } from 'src/app/models/login-credential';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonText, IonButton, IonInput, IonLabel, IonItem, IonList, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  loginInfo: LoginCredential = new LoginCredential();

  constructor(private menuCtrl: MenuController, 
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    console.log();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  login() {
    this.authService.logIn(this.loginInfo).toPromise()
    .then(data => {
      // save token f storage
      if (data?.access) {
        localStorage.setItem("token", data?.access);
        let user_id = this.authService.parseJwt(data?.access)["user_id"]
        localStorage.setItem("id", user_id)
        // GET /api/users/{id}
        this.userService.getUserById(user_id).toPromise()
        .then(user => {
          if (user) {
            localStorage.setItem("role", user?.role)
            localStorage.setItem("username", user.username)
          }
        })
        this.router.navigate(["/home"])
      }})
    .catch(err => console.log)
    
  }

}
