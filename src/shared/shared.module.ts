import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header.component';
import { FeedingComponent } from 'src/app/feeding/feeding.component';
import { SleepComponent } from 'src/app/sleep/sleep.component';
import { ShotRecordsComponent } from 'src/app/shot-records/shot-records.component';
import { MeasurablesComponent } from 'src/app/measurables/measurables.component';
import { EventsComponent } from 'src/app/events/events.component';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';
import { AddFeedingModalComponent } from 'src/app/modals/add-feeding-modal/add-feeding-modal.component';
import { EditFeedingModalComponent } from 'src/app/modals/edit-feeding-modal/edit-feeding-modal.component';
import { FeedingItemComponent } from 'src/app/feeding/feeding-item/feeding-item.component';
import { FeedingListComponent } from 'src/app/feeding/feeding-list/feeding-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from 'src/app/account/account.module';
import { UsersModule } from 'src/app/account/users/users.module';
import { NgbdDatepickerPopup } from 'src/app/helpers/ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { AddEditChildModalComponent } from 'src/app/modals/child/add-edit-child-modal.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, NgbModule, FormsModule, AccountModule, UsersModule, MatIconModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
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
    AccountModule,
    UsersModule,
    NgbdDatepickerPopup,
    MatIconModule,
    AddEditChildModalComponent

  ],
  declarations: [
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
    NgbdDatepickerPopup,
    AddEditChildModalComponent
  ]
})
export class SharedModule {}