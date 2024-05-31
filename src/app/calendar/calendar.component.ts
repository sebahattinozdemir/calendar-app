import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';

interface Day {
  date: Date;
  events: any[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days: Day[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const start = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1);
    const end = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0);
    this.days = [];

    for (let i = start.getDay(); i > 0; i--) {
      this.days.push({ date: new Date(start.getFullYear(), start.getMonth(), start.getDate() - i), events: [] });
    }

    for (let i = 0; i < end.getDate(); i++) {
      this.days.push({ date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + i), events: [] });
    }
  }

  previousMonth() {
    this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
    console.log(this.selectedDate,' selected date')
    this.generateCalendar();
  }

  nextMonth() {
    this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
    this.generateCalendar();
  }

  openAddEventDialog() {
    const dialogRef = this.dialog.open(CalendarFormComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addEvent(result);
      }
    });
  }

  addEvent(event: any) {
    // Find the appropriate day and add the event
    const day = this.days.find(d => d.date.toDateString() === event.date.toDateString());
    if (day) {
      day.events.push(event);
    }
  }

  onEventMoved(event: any) {
    // Handle event moved
  }
}
