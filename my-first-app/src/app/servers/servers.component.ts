import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServers: boolean = false;
  allowButtonClick: boolean = false;
  serverCreateStatus = 'Server was NOT created';
  serverName: string = '';
  userName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 5000);
   }

  onCreateServer() {
    this.serverCreateStatus = `Server was created YESS! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  setColor() {
    return this.userName === 'Banana' ? 'lime' : 'red';
  }

  ngOnInit(): void {
  }

}
