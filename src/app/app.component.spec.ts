import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgDailyHourPlannerModule } from './ng-daily-hour-planner/ng-daily-hour-planner.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgDailyHourPlannerModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
