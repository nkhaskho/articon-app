import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, MenuController, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, IonFab, IonFabButton, IonIcon, IonInput, IonImg, IonGrid, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { add, addSharp, search, searchSharp } from "ionicons/icons";
import {  CapacitorVideoPlayer } from 'capacitor-video-player';
import { addIcons } from 'ionicons';
import { EventService } from 'src/app/services/events/event.service';
import { Event } from 'src/app/models/event';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonBadge, IonCol, IonRow, IonGrid, IonImg, IonInput, IonIcon, IonFabButton, IonFab, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class EventsPage implements OnInit {

  events: Event[] = [];
  appStorage = localStorage;

  constructor(private menuCtrl: MenuController, private eventService: EventService) { 
    addIcons({add, addSharp, search, searchSharp});
  }

  ngOnInit() {

    {
      this.menuCtrl.enable(true);
      this.eventService.getEvents('').toPromise()
      .then(res => { if (res) this.events = res;})
      .catch(err => console.log)
    }


  }
}
