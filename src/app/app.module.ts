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
