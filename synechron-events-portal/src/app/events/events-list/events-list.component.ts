import { Component, OnInit } from '@angular/core';
import { Event } from "../models/event";
import { EventsService } from "../services/events.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']

})
export class EventsListComponent implements OnInit {

  constructor(private _eventService:EventsService) {

   }
  title:string="Synechron Events List";
  subTitle:string="Published by Global HR!";
  selectedEvent:Event;
  searchChar:string;
  events: Event[] = [];
  
  ngOnInit() {
    this.events=this._eventService.getAllEvents();
  }
  onEventSelection(event:Event):void{
    this.selectedEvent=event;
  }
}
