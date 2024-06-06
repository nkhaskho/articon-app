import { Component, forwardRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonItem, IonLabel, IonButton, IonCardContent, IonCardTitle, IonList } from '@ionic/angular/standalone';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonList, IonCardTitle, IonCardContent, IonButton, IonLabel, IonItem, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditProductPage implements OnInit {

  product: Product = new Product();
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe(
      data => this.product = data,
      err => console.log
    )
    this.productService.getCategories().subscribe(
      data => this.categories = data,
      err => console.log
    )
  }

  update() {
    this.productService.updateProduct(this.product).subscribe(
      data => this.router.navigate(['/products']),
      err => console.log
    )
  }

}
