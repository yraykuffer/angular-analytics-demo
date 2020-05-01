import { Injectable } from '@angular/core';
declare var ga: Function;
@Injectable()
export class GoogleAnalyticsServiceService {

  constructor() { }

  public eventEmitter(eventCategory: string, eventLabel: string, eventAction: string, eventValue: number) {
    ga('myTracker.send', 'event', {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue
    });
  }
}
