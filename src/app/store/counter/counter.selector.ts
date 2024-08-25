// export const selectCount = (state: { counter: number }) => state.counter;

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectCounterState =
  createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.counter
);

// counter.selectors.ts
// import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectCounter = createSelector(
  selectAppState,
  (state) => state.counter
);

export const selectHistory = createSelector(
  selectAppState,
  (state) => state.historyCounter
);
