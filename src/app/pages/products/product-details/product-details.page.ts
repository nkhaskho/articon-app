import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductDetailsPage implements OnInit {

  product: Product | undefined = new Product();

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Fetch product details
    let id = this.activatedRoute.snapshot.params['id']
    this.productService.getProductById(id).toPromise()
    .then(data => this.product = data)
    .catch(err => console.log)
  }

}
