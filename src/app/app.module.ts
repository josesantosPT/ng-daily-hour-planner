import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgDailyHourPlannerModule } from './ng-daily-hour-planner/ng-daily-hour-planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDailyHourPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
