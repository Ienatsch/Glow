import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountLayoutComponent } from './account-layout.component';
import { AccountLoginComponent } from './login/account-login.component';
import { AccountRegisterComponent } from './register/account-register.component';

const routes: Routes = [
    {
        path: '', component: AccountLayoutComponent,
        children: [
            { path: 'glow-account-login', component: AccountLoginComponent },
            { path: 'glow-account-register', component: AccountRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }