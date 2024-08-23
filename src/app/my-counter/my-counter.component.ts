import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  incrementBy,
  reset,
} from '../store/counter/counter.actions';
import { selectCount } from '../store/counter/counter.selector';
import { AppState } from '../store/app.reducer';
import {
  decrementHistory,
  getHistorySum,
  incrementHistory,
  undo,
} from '../store/counter/history-counter/history-counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent {
  count$: Observable<number>;
  incrementByValue: number = 1;
  decreaseByValue: number = 1;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment({ value: 1 }));
    this.store.dispatch(
      incrementHistory({
        historyLastNumber: 1,
        history: [],
        historySum: 0,
      })
    );
    this.getHistorySumFromStore();
  }

  incrementBy() {
    this.store.dispatch(incrementBy({ value: this.incrementByValue }));
    this.store.dispatch(
      incrementHistory({
        historyLastNumber: this.incrementByValue,
        history: [],
        historySum: 0,
      })
    );
    this.getHistorySumFromStore();
  }
  decrement() {
    this.store.dispatch(decrement());
    this.store.dispatch(
      decrementHistory({
        historyLastNumber: 1,
        history: [],
        historySum: 0,
      })
    );
    this.getHistorySumFromStore();
  }

  decrementBy() {
    this.store.dispatch(incrementBy({ value: -this.decreaseByValue }));
    this.store.dispatch(
      decrementHistory({
        historyLastNumber: this.decreaseByValue,
        history: [],
        historySum: 0,
      })
    );
    this.getHistorySumFromStore();
  }

  undo() {
    this.store.dispatch(undo());
    this.getHistorySumFromStore();
  }

  reset() {
    this.store.dispatch(reset());
    this.getHistorySumFromStore();
  }

  getHistorySumFromStore() {
    this.store.dispatch(
      getHistorySum({
        history: [],
        historySum: 0,
        historyLastNumber: 0,
      })
    );
  }
}
