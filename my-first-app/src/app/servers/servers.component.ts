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
  servers = [];
  paraContent: string = 'Displaying details BOOM';
  paraBool: boolean = false;
  paraNumArray = [];
  paraNum = 0;

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
      this.paraNum = this.paraNum + 1;
      this.paraNumArray.push(this.paraNum);
    }

    else {
      this.paraContent = 'KYLE OREILLY Red Dragon is Back!';
      this.paraBool = false;
      this.paraNum = this.paraNum + 1;
      this.paraNumArray.push(this.paraNum);
    }

  }

  ngOnInit(): void {
  }

}
