import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './account-layout.component';
import { AccountLoginComponent } from './login/account-login.component';
import { AccountRegisterComponent } from './register/account-register.component';
import { AccountHomeComponent } from './home/account-home.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountLayoutComponent,
        AccountLoginComponent,
        AccountRegisterComponent,
        AccountLoginComponent,
        AccountHomeComponent,
    ]
})
export class AccountModule { }