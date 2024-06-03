import { Injectable } from '@angular/core';
import {Event } from 'src/app/models/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  endpoint = "http://localhost:8000/api/events/";
  constructor(private http: HttpClient) { }

  getEvents(q: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.endpoint);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.endpoint, event);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(this.endpoint+id);
  }

  
  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.endpoint+event.id, event);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.get<any>(this.endpoint+id);
  }

}


 
