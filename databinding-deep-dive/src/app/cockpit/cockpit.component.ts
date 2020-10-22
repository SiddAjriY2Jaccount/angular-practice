import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>(); /* //to call constructor of EventEmiter object */
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  /* newServerName = '';
  newServerContent = ''; */
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

}
