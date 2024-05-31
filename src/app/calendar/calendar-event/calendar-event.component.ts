import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent {
  @Input() event: any;
  @Output() eventMoved = new EventEmitter<any>();

  onDragEnd(event: CdkDragEnd<any>) {  // Ensure the correct type here
    this.eventMoved.emit(this.event);
  }
}
