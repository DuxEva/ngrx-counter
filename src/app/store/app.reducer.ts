import { combineReducers } from '@ngrx/store';

import { counterReducer, CounterState } from './counter/counter.reducer';
import {
  historyCounterReducer,
  HistoryCounterState,
} from './counter/history-counter/history-counter.reducer';

export interface AppState {
  counter: CounterState;
  historyCounter: HistoryCounterState;
}

export const appReducer = combineReducers({
  counter: counterReducer,
  historyCounter: historyCounterReducer,
});
