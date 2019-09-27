import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { FirstLetterCapsPipe } from './pipes/first-letter-caps.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { EventsService } from './services/events.service';



@NgModule({
  declarations: [EventsListComponent, EventDetailsComponent, FirstLetterCapsPipe, FilterByPipe],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    EventsListComponent
  ],
  providers:[
    EventsService
  ]
})
export class EventsModule { }
