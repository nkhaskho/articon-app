import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonInput, IonButton, IonTitle, IonToolbar, IonItem, IonIcon, IonLabel, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, addCircleSharp, createOutline, trashOutline, trashSharp } from 'ionicons/icons';
import { ProductService } from 'src/app/services/products/product.service';
import { ProductCategory } from 'src/app/models/product-category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonItem, IonIcon, IonLabel, IonList]
})
export class CategoriesPage implements OnInit {

  category: ProductCategory = new ProductCategory();
  categories: ProductCategory[] | undefined = [];



  constructor(private productService: ProductService) {
    addIcons({ trashOutline, trashSharp, createOutline, addCircleSharp });
  }

  ngOnInit() {
    this.productService.getCategories().toPromise()
      .then(data => this.categories = data)
      .catch(err => console.log)
  }

  addCategory() {
    this.productService.addCategory(this.category).toPromise()
      .then(data => this.ngOnInit())
      .catch(err => console.log)
  }

  deleteCategory(id: number | undefined) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie?")) {
    this.productService.deleteCategory(id).toPromise()
      .then(data => this.ngOnInit())
      .catch(err => console.log)
  }
}}


