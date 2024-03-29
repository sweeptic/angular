import { Component } from '@angular/core';
import { AccountsService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
