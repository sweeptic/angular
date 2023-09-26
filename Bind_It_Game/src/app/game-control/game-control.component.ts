import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  intervalId = undefined;
  @Output() generateNumber = new EventEmitter<{ randomNumber: number }>();

  intervalFn() {
    const id = setInterval(() => {
      const num = Math.floor(Math.random() * 10);
      this.generateNumber.emit({ randomNumber: num });
    }, 1000);
    this.intervalId = id;
  }

  onStartGame() {
    console.log('start');
    this.intervalFn();
  }

  onStopGame() {
    console.log('stop');
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
