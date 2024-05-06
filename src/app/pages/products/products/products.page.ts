import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, MenuController, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, IonFab, IonFabButton, IonIcon, IonInput, IonImg, IonGrid, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { add, addSharp, search, searchSharp } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonBadge, IonCol, IonRow, IonGrid, IonImg, IonInput, IonIcon, IonFabButton, IonFab, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(private menuCtrl: MenuController, private productService: ProductService) { 
    addIcons({add, addSharp, search, searchSharp});
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.products.push(
      {
        name: "product 1", 
        category: "categ 1",
        quantity: 10, 
        price: 12
      }
    )
    this.products.push(
      {
        name: "product 2", 
        category: "cat 1",
        quantity: 200, 
        price: 140
      }
    )
  }

}
