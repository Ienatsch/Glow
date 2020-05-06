import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FeedingComponent } from './feeding/feeding.component';
import { SleepComponent } from './sleep/sleep.component';
import { ShotRecordsComponent } from './shot-records/shot-records.component';
import { MeasurablesComponent } from './measurables/measurables.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { AddFeedingModalComponent } from './feeding/add-feeding-modal/add-feeding-modal.component';
import { EditFeedingModalComponent } from './feeding/edit-feeding-modal/edit-feeding-modal.component';
import { DeleteFeedingModalComponent } from './feeding/delete-feeding-modal/delete-feeding-modal.component';
import { AddSleepModalComponent } from './sleep/add-sleep-modal/add-sleep-modal.component';
import { EditSleepModalComponent } from './sleep/edit-sleep-modal/edit-sleep-modal.component';
import { DeleteSleepModalComponent } from './sleep/delete-sleep-modal/delete-sleep-modal.component';
import { AddShotRecordModalComponent } from './shot-records/add-shot-record-modal/add-shot-record-modal.component';
import { EditShotRecordModalComponent } from './shot-records/edit-shot-record-modal/edit-shot-record-modal.component';
import { DeleteShotRecordModalComponent } from './shot-records/delete-shot-record-modal/delete-shot-record-modal.component';
import { AddEventModalComponent } from './events/add-event-modal/add-event-modal.component';
import { EditEventModalComponent } from './events/edit-event-modal/edit-event-modal.component';
import { DeleteEventModalComponent } from './events/delete-event-modal/delete-event-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AddTimeModalComponent } from './modals/add-time-modal/add-time-modal.component';
import { EditTimeModalComponent } from './modals/edit-time-modal/edit-time-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedingComponent,
    SleepComponent,
    ShotRecordsComponent,
    MeasurablesComponent,
    EventsComponent,
    AddFeedingModalComponent,
    EditFeedingModalComponent,
    DeleteFeedingModalComponent,
    AddSleepModalComponent,
    EditSleepModalComponent,
    DeleteSleepModalComponent,
    AddShotRecordModalComponent,
    EditShotRecordModalComponent,
    DeleteShotRecordModalComponent,
    AddEventModalComponent,
    EditEventModalComponent,
    DeleteEventModalComponent,
    AddTimeModalComponent,
    EditTimeModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
