import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarFormComponent } from '../calendar-form/calendar-form.component';

interface Day {
  date: Date;
  events: any[];
}

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  selectedDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days: Day[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    // Generate days for the selected month
  }

  previousMonth() {
    this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
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
    // Add event to the calendar
  }

  onEventMoved(event: any) {
    // Handle event moved
  }
}
