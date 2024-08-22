import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementBy, reset } from '../store/counter/counter.actions';
import { selectCount } from '../store/counter/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent {
  count$: Observable<number>;
  incrementByValue: number = 1;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment({ value: 1 }));
  }

  incrementBy() {
    this.store.dispatch(incrementBy({ value: this.incrementByValue }));
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
