import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  endpoint = "http://localhost:8000/api/products/reviews/";

  constructor(private http: HttpClient) { }

  getReviews(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(this.endpoint);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.endpoint, review);
  }

  getReviewById(id: number): Observable<Review> {
    return this.http.get<Review>(this.endpoint+id);
  }

  updateReview(review: Review): Observable<Review> {
    return this.http.put<Review>(this.endpoint+review.id, review);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.get<any>(this.endpoint+id);
  }

}
