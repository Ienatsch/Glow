import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedingComponent } from './feeding/feeding.component';
import { SleepComponent } from './sleep/sleep.component';
import { MeasurablesComponent } from './measurables/measurables.component';
import { ShotRecordsComponent } from './shot-records/shot-records.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'glow-feeding', component: FeedingComponent },
  { path: 'glow-sleep', component: SleepComponent },
  { path: 'glow-measurables', component: MeasurablesComponent },
  { path: 'glow-shot-records', component: ShotRecordsComponent },
  { path: 'glow-events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }