import { NgDailyHourPlannerModule } from './ng-daily-hour-planner.module';

describe('NgDailyHourPlannerModule', () => {
  let ngDailyHourPlannerModule: NgDailyHourPlannerModule;

  beforeEach(() => {
    ngDailyHourPlannerModule = new NgDailyHourPlannerModule();
  });

  it('should create an instance', () => {
    expect(ngDailyHourPlannerModule).toBeTruthy();
  });
});
