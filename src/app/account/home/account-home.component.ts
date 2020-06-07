import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AccountService } from '../../services/account.service';

@Component({ 
    selector: 'glow-account-home',
    templateUrl: 'account-home.component.html' 
})
export class AccountHomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}