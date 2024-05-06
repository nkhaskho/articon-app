import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  } from "@angular/core/";
import { IonContent, IonHeader, IonTitle, IonToolbar, MenuController, IonGrid, IonCol, IonList, IonItem, IonLabel, IonInput, IonButton, IonText, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonText, IonButton, IonInput, IonLabel, IonItem, IonList, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    console.log();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  login() {
    this.router.navigate(["/"])
  }

}
