import { Component, OnInit, Input, Output } from '@angular/core';

export class DataPlannerItemComponent {
  time: number;
  tag: string;
  color: string;
}

export class TagPlannerItem {
  name: string;
  color: string;
}

@Component({
  selector: 'app-ng-daily-hour-planner',
  templateUrl: './ng-daily-hour-planner.component.html',
  styleUrls: ['./ng-daily-hour-planner.component.css']
})

export class NgDailyHourPlannerComponent implements OnInit {

  @Input() startHour: number;
  @Input() endHour: number;
  @Input() interval: number;

  @Input() tags: TagPlannerItem[];
  @Input() data: DataPlannerItemComponent[];
  @Input() showTags = true;

  constructor() {

    if (this.startHour === undefined) {
      this.startHour = 0;
    }

    if (this.endHour === undefined) {
      this.endHour = 24;
    }

    if (this.interval === undefined) {
      this.interval = 60;
    }
  }

  ngOnInit() {
    for (let i = this.startHour * 60; i < this.endHour * 60; i += this.interval) {
      this.data.push({'time': i, 'tag': '', 'color': ''});
    }
  }

  droppedItem(timeData: number, droppedTag: { dropData: { name: string; color: string; }; } ) {
    const res: DataPlannerItemComponent = this.data.filter(obj => {
      return obj.time === timeData;
    })[0];
    res.tag = droppedTag.dropData.name;
    res.color = droppedTag.dropData.color;
  }

}
