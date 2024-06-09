import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { ProductService } from 'src/app/services/products/product.service';
import { EventService } from 'src/app/services/events/event.service';
import { Product } from 'src/app/models/product';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  appStorage = localStorage;
  products: Product[] = [];
  events: Event[] = [];
  users: User[] = [];
  
  constructor(private productService: ProductService,
              private eventsService: EventService,
              private userService: UserService,
              // TODO
  ) { }

  ngOnInit() {
    this.productService.getProducts("").subscribe(
      data => this.products = data,
      err => console.log
    )
    this.eventsService.getEvents("").subscribe(
      data => this.events = data,
      err => console.log
    )
    this.userService.findAll().subscribe(
      data => this.users = data,
      err => console.log
    )
  }

}
