import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //   selector: '[app-servers]',
  //   selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: ` <app-server></app-server><app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log('allow server set to true');
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(msg: string) {
    this.serverCreationStatus =
      'Server was created!' + '  ...' + this.serverName;
    this.serverCreated = true;
    this.servers.push('server3');
  }

  onUpdateServerName(ev: any) {
    // console.log('event', ev);
    this.serverName = ev.target.value;
  }
}
