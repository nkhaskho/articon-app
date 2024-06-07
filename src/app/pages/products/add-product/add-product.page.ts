import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';
import { ProductCategory } from 'src/app/models/product-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonButton, IonItem, IonInput, IonLabel, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddProductPage implements OnInit {

  product: Product = new Product();
  errors: Product = new Product();
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService,
            private router: Router) { }

  ngOnInit() {
    this.productService.getCategories().subscribe(
      res => this.categories=res,
      err => console.log
    )
  }

  add() {
    this.productService.addProduct(this.product).subscribe(
      data => this.router.navigate(['/products']),
      err => this.errors = err.error
    )
  }

}
