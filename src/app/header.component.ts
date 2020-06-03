import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'glow-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User;

  constructor(private accountService: AccountService, private router: Router) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
      this.router.navigate(['/']);
  }
}
