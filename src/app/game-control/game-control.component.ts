import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private interval: any;
  private myNumber = 0;
  @Output() numberAdded: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  start() {
    this.interval = setInterval(() => this.increment(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  increment() {
    this.myNumber = this.myNumber + 1;
    console.log('MY NUMBER: ', this.myNumber);
    this.numberAdded.emit(this.myNumber);
  }

}
