import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {

    console.log(value);

    this.enteredText = value;

  }

  compare(randomLetter: string, enteredLetter: string) {
    if (enteredLetter) {
      if (randomLetter === enteredLetter) {
        return 'green';
      } else return 'red';
    } else return 'pending'
  }
}
