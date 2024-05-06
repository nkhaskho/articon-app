import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = "http://localhost:8000/api/products";

  constructor(private http: HttpClient) { }

  getCategories() {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin',"http://localhost:4200/");
    return this.http.get<ProductCategory[]>(this.endpoint+"/categories", {headers: headers});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

}
