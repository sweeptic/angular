import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';
// import { IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ value: 2 }));
    // this.store.dispatch(new IncrementAction(1));
  }

  decrement() {
    this.store.dispatch(decrement({ value: -2 }));
    // this.store.dispatch(new DecrementAction(1));
  }
}
