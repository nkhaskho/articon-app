import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,MenuController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addSharp, search, searchSharp } from "ionicons/icons";

import { WorkshopService } from 'src/app/services/workshops/workshop.service';
import { Workshop } from 'src/app/models/workshop';
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WorkshopPage implements OnInit {

  workshop: Workshop[] = [];
  constructor(private menuCtrl: MenuController, private workshopService:WorkshopService) { 
    addIcons({add, addSharp, search, searchSharp});
  }

  ngOnInit() {
    {
      this.menuCtrl.enable(true);
      this.workshopService.getWorkshops('').toPromise()
      .then(res => { if (res) this.workshop = res;})
      .catch(err => console.log)
    }

  }

}
