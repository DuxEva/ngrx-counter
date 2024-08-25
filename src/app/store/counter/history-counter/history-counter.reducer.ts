import { createReducer, on } from '@ngrx/store';
import {
  decrementHistory,
  getHistorySum,
  incrementHistory,
  undo,
} from './history-counter.actions';
import { reset } from '../counter.actions';

export interface HistoryCounterState {
  history: number[];
  historySum: number;
  historyLastNumber: number;
}

const initialState: HistoryCounterState = {
  history: [0],
  historySum: 0,
  historyLastNumber: 0,
};

export const historyCounterReducer = createReducer(
  initialState,
  on(incrementHistory, (state, actions) => ({
    ...state,
    history: [...state.history, actions.historyLastNumber],
    historySum: Math.max(state.historySum - actions.historyLastNumber, 0),
    historyLastNumber: actions.historyLastNumber,
  })),

  on(decrementHistory, (state, actions) => ({
    ...state,
    history: [...state.history, -actions.historyLastNumber],
    historySum: Math.max(state.historySum - actions.historyLastNumber, 0),
    historyLastNumber: -actions.historyLastNumber,
  })),

  on(undo, (state) => {
    const lastValue = state.history[state.history.length - 1];
    const newHistory = state.history.slice(0, -1);
    const newHistorySum = newHistory.reduce((acc, curr) => acc + curr, 0);
    return {
      ...state,
      history: newHistory,
      historySum: newHistorySum,
    };
  }),

  on(reset, (state) => ({
    ...state,
    history: [...state.history, 0],
    historySum: 0,
    historyLastNumber: 0,
  })),

  on(getHistorySum, (state, Actions) => {
    const lastZeroIndex = state.history.lastIndexOf(0);
    const history = state.history.slice(lastZeroIndex);
    return {
      ...state,
      historySum: history.reduce((acc, curr) => acc + curr, 0),
      historyLastNumber: state.history[state.history.length - 1] || 0,
    };
  })
);
