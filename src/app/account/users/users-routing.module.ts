import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountLayoutComponent } from '../account-layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddEditComponent } from './add-edit/user-add-edit.component';

const routes: Routes = [
    {
        path: '', component: AccountLayoutComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'add', component: UserAddEditComponent },
            { path: 'edit/:id', component: UserAddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }