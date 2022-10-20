import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl: string = "https://nettuts.hu/jms/feladat/events";
  list: Array<Event> = [];
  
  constructor(
    private http: HttpClient) {
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }

  update(event: Event): Observable<Event> {
    return this.http.patch<Event>(
      `${this.eventsUrl}/${event.id}`,
      event,
    );
  }

  create(event: Event): void {
    this.list.push(event);
  }

  remove(id: number) : void {
    this.list = this.list.filter(item => item.id == id);
  }

}
