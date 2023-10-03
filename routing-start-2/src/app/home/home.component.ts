import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServers(id: number) {
    // complex calculation
    // console.log('router', this.router);
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}

// http://localhost:4200/servers/5/edit?allowEdit=1#loading
// http://localhost:4200/servers/1/edit?allowEdit=1#loading

//  <a
//         [routerLink]="['/servers', 5, 'edit']"
//         [queryParams]="{ allowEdit: '1' }"
//         fragment="loading"
//         href="#"
//         class="list-group-item"
//         *ngFor="let server of servers"
//       >

// this.router.navigate(['/servers', id, 'edit'], {
//   queryParams: { allowEdit: '1' },
//   fragment: 'loading',
// });
