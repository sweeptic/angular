import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bind_It_Game';
  randomNumData = [];

  onGenerateNumber(payload: { randomNumber: number }) {
    console.log('generatedNumber', payload.randomNumber);
    this.randomNumData.push(payload.randomNumber);
  }
}
