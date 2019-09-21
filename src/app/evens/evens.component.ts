import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evens',
  templateUrl: './evens.component.html',
  styleUrls: ['./evens.component.css']
})
export class EvensComponent implements OnInit {

  @Input() evenNumber: number;

  constructor() { }

  ngOnInit() {
    console.log('EVEN: ', this.evenNumber);
  }

}
