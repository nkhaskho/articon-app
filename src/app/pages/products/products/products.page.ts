import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, MenuController, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, IonFab, IonFabButton, IonIcon, IonInput, IonImg, IonGrid, IonRow, IonCol, IonBadge, IonButton } from '@ionic/angular/standalone';
import { add, addSharp, search, searchSharp } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonButton, IonBadge, IonCol, IonRow, IonGrid, IonImg, IonInput, IonIcon, IonFabButton, IonFab, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductsPage implements OnInit {

  products: Product[] = [];
  appStorage = localStorage;

  constructor(private menuCtrl: MenuController, private productService: ProductService) { 
    addIcons({add, addSharp, search, searchSharp});
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.productService.getProducts('').toPromise()
    .then(res => { if (res) this.products = res;})
    .catch(err => console.log)
  }

  delete(productId: any) {
    // TODO: call delete method, then recall ngOnInit
  }

}
