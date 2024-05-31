import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsSubject = new BehaviorSubject<any[]>([]);
  events$ = this.eventsSubject.asObservable();

  addEvent(event: any) {
    const events = this.eventsSubject.getValue();
    this.eventsSubject.next([...events, event]);
  }

  moveEvent(event: any) {
    // Implement event moving logic
  }
}
