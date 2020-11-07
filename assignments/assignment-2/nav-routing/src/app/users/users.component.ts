import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  message: string;

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }


}
