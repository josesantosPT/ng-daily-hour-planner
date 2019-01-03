import { NgDailyHourPlannerModule } from './ng-daily-hour-planner.module';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { TestBed } from '@angular/core/testing';
import { NgDailyHourPlannerComponent } from './ng-daily-hour-planner.component';

describe('NgDailyHourPlannerModule', () => {
  let ngDailyHourPlannerModule: NgDailyHourPlannerModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ DragAndDropModule ],
      declarations: [NgDailyHourPlannerComponent],
    });

    ngDailyHourPlannerModule = new NgDailyHourPlannerModule();
  });

  it('should create an instance', () => {
    expect(ngDailyHourPlannerModule).toBeTruthy();
  });
});
