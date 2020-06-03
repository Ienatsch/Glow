import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AccountLayoutComponent } from '../account-layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddEditComponent } from './add-edit/user-add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        UserListComponent,
        UserAddEditComponent
    ]
})
export class UsersModule { }