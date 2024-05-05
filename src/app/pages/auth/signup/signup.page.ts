import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonItem, IonList, IonGrid, IonLabel, IonInput, IonButton, IonSelect } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonGrid, IonList, IonItem, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  signUp() {
    // call to auth/user service
    this.authService.signUp(this.user).subscribe(
      data => {
        console.log(data);
        // TODO: 
      },
      err => console.log(err)
      // TODO
    )
  }

}
