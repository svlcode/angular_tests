import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService],
})
export class AppComponent {

  constructor(private loggingService: LoggingService) {
  }

  addUser(user: string) {
    //..
    this.loggingService.logMessage(`${user} added.`);
  }

}
