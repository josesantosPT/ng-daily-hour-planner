import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDailyHourPlannerComponent } from './ng-daily-hour-planner.component';

describe('NgDailyHourPlannerComponent', () => {
  let component: NgDailyHourPlannerComponent;
  let fixture: ComponentFixture<NgDailyHourPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDailyHourPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDailyHourPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
