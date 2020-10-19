import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServers: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    }, 5000);
   }

  ngOnInit(): void {
  }

}
