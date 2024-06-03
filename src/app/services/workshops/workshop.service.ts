import { Injectable } from '@angular/core';
import {Workshop} from 'src/app/models/workshop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  endpoint = "http://localhost:8000/api/workshop/";
  constructor(private http: HttpClient) { }

  getWorkshops(q: string): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(this.endpoint);
  }

  addWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>(this.endpoint, workshop);
  }

  getWorkshopById(id: number): Observable<Workshop> {
    return this.http.get<Workshop>(this.endpoint+id);
  }

  
  updateWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.put<Workshop>(this.endpoint+workshop.id, workshop);
  }

  deleteWorkshop(id: number): Observable<any> {
    return this.http.get<any>(this.endpoint+id);
  }

}


 

