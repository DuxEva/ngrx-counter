import { createAction, props } from '@ngrx/store';
import { HistoryCounterState } from './history-counter.reducer';

export const incrementHistory = createAction(
  '[History Counter] Increment',
  props<HistoryCounterState>()
);
export const decrementHistory = createAction(
  '[History Counter] Decrement',
  props<HistoryCounterState>()
);
export const reset = createAction(
  '[History Counter] Reset',
  props<HistoryCounterState>()
);

export const getHistorySum = createAction(
  '[History Counter] Get History Sum',
  props<HistoryCounterState>()
);

export const undo = createAction('[History Counter] Undo');
