import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = "http://localhost:8000/api/products/";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.endpoint+"categories/");
  }

  getProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.endpoint, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.endpoint+id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.endpoint+product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.get<any>(this.endpoint+id);
  }

}
