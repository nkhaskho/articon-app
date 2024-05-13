import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { starOutline, starHalf } from "ionicons/icons";

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/products/review.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductDetailsPage implements OnInit {

  product: Product | undefined = new Product();
  reviews: Review[] | undefined = [];

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService
  ) {
    addIcons({ starOutline, starHalf });
   }

  ngOnInit() {
    // Fetch product details
    let id = this.activatedRoute.snapshot.params['id']
    this.productService.getProductById(id).toPromise()
    .then(data => this.product = data)
    .catch(err => console.log)
    // TODO: get product reviews
    this.reviewService.getReviews(0).toPromise()
    .then(data => this.reviews = data)
    .catch(err => console.log)
  }

}
