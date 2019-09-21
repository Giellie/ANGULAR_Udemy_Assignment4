import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  numberIncremented(myNumber: number) {
    myNumber % 2 ? this.oddNumbers.push(myNumber) : this.evenNumbers.push(myNumber);
    console.log('NUMBER IN MAIN APP: ', myNumber);
  }
}
