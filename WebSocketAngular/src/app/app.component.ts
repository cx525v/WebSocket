import { Component } from '@angular/core';
declare function connect(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  connectWebSocket() {
    connect();
  }
}
