import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgDailyHourPlannerModule } from './ng-daily-hour-planner/ng-daily-hour-planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDailyHourPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
