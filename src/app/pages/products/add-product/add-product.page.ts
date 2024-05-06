import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddProductPage implements OnInit {

  product: Product = new Product();

  constructor() { }

  ngOnInit() {
    return
  }

  add() {
    console.log(this.product);
  }

}
