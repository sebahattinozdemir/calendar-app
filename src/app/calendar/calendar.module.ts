import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarViewComponent,
    CalendarFormComponent,
    CalendarEventComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MaterialModule
  ]
})
export class CalendarModule { }
