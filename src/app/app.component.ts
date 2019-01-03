import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  demoData = [];

  demoTags = [
    {'name' : 'Sleep', 'color': '#ffffcc'},
    {'name' : 'Work', 'color': '#c5eff7'},
    {'name' : 'Play', 'color': '#ff9478'},
  ];
}
