import { Component, OnInit, Input } from '@angular/core';

import { Event } from "../models/event";

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor() { }
  title:string="details of - ";
  @Input() event:Event;
  ngOnInit() {
  }

}
