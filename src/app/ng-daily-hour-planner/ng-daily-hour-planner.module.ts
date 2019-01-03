import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgDailyHourPlannerComponent } from './ng-daily-hour-planner.component';

@NgModule({
  imports: [CommonModule, DragAndDropModule],
  declarations: [NgDailyHourPlannerComponent],
  exports: [NgDailyHourPlannerComponent],
})
export class NgDailyHourPlannerModule { }
