import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  message: string;

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }

}
