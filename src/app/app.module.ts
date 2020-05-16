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
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { AddFeedingModalComponent } from './modals/add-feeding-modal/add-feeding-modal.component';
import { EditFeedingModalComponent } from './modals/edit-feeding-modal/edit-feeding-modal.component';
import { FeedingItemComponent } from './feeding/feeding-item/feeding-item.component';
import { FeedingListComponent } from './feeding/feeding-list/feeding-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedingComponent,
    SleepComponent,
    ShotRecordsComponent,
    MeasurablesComponent,
    EventsComponent,
    DeleteModalComponent,
    AddFeedingModalComponent,
    EditFeedingModalComponent,
    FeedingItemComponent,
    FeedingListComponent,
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
