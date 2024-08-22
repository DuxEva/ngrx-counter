import { createReducer, on } from '@ngrx/store';
import { decrement, increment, incrementBy, reset } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => state + actions.value),
  on(incrementBy, (state, actions) => state + actions.value),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
