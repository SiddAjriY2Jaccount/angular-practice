import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServers = false;
  allowButtonClick = false;
  serverCreateStatus = 'Server was NOT created';
  serverName = '';
  userName: string = '';
  servers = [];
  paraContent: string = 'Displaying details BOOM';
  paraBool: boolean = false;
  paraNumArray = [];

  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 5000);
   }

  onCreateServer() {
    this.serverCreateStatus = `Server was created YESS! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  setColor() {
    return this.userName === 'Banana' ? 'lime' : 'red';
  }

  toggleParaContent() {
    if (this.paraBool === false) {
      this.paraContent = 'Adam Cole BABAY!';
      this.paraBool = true;
      this.paraNumArray.push(new Date());
    }

    else {
      this.paraContent = 'KYLE OREILLY Red Dragon is Back!';
      this.paraBool = false;
      this.paraNumArray.push(new Date());
    }

  }

  ngOnInit(): void {
  }

}
