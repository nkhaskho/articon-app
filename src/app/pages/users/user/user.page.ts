import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonLabel, IonAvatar, IonItem, IonList, IonBadge } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonBadge, IonList, IonItem, IonAvatar, IonLabel, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  user: User | undefined = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1).toPromise()
    .then(data => this.user = data)
    .catch(err => console.log)
  }

}
