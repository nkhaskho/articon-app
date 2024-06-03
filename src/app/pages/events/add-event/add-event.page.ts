import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/events/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonButton, IonItem, IonInput, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class AddEventPage implements OnInit {

  event: Event = new Event();
  

  constructor(private productService: EventService,
            private router: Router) { }

  ngOnInit() {
    
  }
  add() {
    this.productService.addEvent(this.event).subscribe(
      data => this.router.navigate(['/events']),
      err => console.log(err)
    )
  }


}
