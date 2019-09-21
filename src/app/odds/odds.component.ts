import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  @Input() oddNumber: number;

  constructor() { }

  ngOnInit() {
    console.log('ODD: ', this.oddNumber);
  }

}
