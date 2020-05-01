import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsServiceService } from '../google-analytics-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsServiceService) { }

  ngOnInit() {
  }

  clickLike() {
    this.ga.eventEmitter('userPage', 'userLabel', 'like', 1);
    // this.ga.eventEmitter('userPage', 'userLabel', 'like2', 1);
  }

}
