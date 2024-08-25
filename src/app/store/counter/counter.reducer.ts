import { createReducer, on } from '@ngrx/store';
import { decrement, decrementBy, increment, incrementBy, reset } from './counter.actions';

export interface CounterState {
  counter: number;
}

const initialState: CounterState = { counter: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => ({
    ...state,
    counter: state.counter + 1,
  })),

  on(incrementBy, (state, actions) => ({
    ...state,
    counter: state.counter + actions.value,
  })),
  on(decrement, (state) => ({
    ...state,
    counter: Math.max(state.counter - 1, 0),
  })),

  on(decrementBy, (state, actions) => ({
    ...state,
    counter: Math.max(state.counter - actions.value, 0),
  })),
  on(reset, (state) => ({
    ...state,
    counter: 0,
  }))
);
