import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelectOption, MenuController, IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonItem, IonList, IonGrid, IonLabel, IonInput, IonButton, IonSelect, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonCardContent, IonCard, IonButton, IonInput, IonLabel, IonGrid, IonList, IonItem, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  user: User = new User();
  errors: User = new User();
  message: string = "";
  regions = [
    "Tunis",
    "Ariana",
    "Jendouba"
  ];

  constructor(private authService: AuthService, private menuCtrl: MenuController) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  signUp() {
    // call to auth/user service
    this.authService.signUp(this.user).subscribe(
      data => {
        console.log(data);
        this.message = `User "${this.user.username}" created.`;
        this.user = new User(); 
      },
      err => this.errors = err.error

    )
  }

}
