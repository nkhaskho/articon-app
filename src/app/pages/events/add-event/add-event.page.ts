import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonInput, IonItem, IonButton, IonTextarea } from '@ionic/angular/standalone';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/events/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonSelect, IonSelectOption, IonButton, IonItem, IonInput, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class AddEventPage implements OnInit {

  event: Event = new Event();
  eventTypes = [
    {
      "type": "commercial",
      "name": "Commercial"
    },
    {
      "type": "sejnen",
      "name": "Sejnen"
    },
    {
      "type": "region",
      "name": "Region"
    },
    {
      "type": "handicape",
      "name": "Handicapé"
    },
    {
      "type": "nouveau artisan",
      "name": "Nouveau Artisan"
    }
  ]
  

  constructor(private productService: EventService,
            private router: Router) { }

  ngOnInit() {
    console.log();
  }
  add() {
    this.productService.addEvent(this.event).subscribe(
      data => this.router.navigate(['/events']),
      err => console.log(err)
    )
  }


}
