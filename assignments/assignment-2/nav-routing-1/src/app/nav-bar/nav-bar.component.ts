import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  @Output() tabNav = new EventEmitter<String>();
  constructor() {
   }

   onClicking(tabName : string) {
     this.tabNav.emit(tabName);
   }

  ngOnInit() {
  }

}