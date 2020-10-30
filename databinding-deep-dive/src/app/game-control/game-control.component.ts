import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: any;
  curInterval = 0;

  @Output() intervalEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.curInterval ++;
      this.intervalEvent.emit(this.curInterval);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
