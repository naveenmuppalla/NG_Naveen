import { Pipe, PipeTransform } from '@angular/core';
import { Event } from "../models/event";

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: Event[], ...args: string[]): Event[] {
    let filterBy=args[0]?args[0].toLocaleLowerCase():null;    
    return filterBy?value.filter((event:Event)=>event.eventName.toLocaleLowerCase().indexOf(filterBy)!=-1):value;
  }

}
