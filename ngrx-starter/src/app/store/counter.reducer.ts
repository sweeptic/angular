import { Action, combineReducers, createReducer, on } from '@ngrx/store';
// import { CounterActions, INCREMENT } from './counter.actions';
import { decrement, increment, set } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   let newState = state;
//   switch (action.type) {
//     case INCREMENT:
//       newState = state + (action as CounterActions).value;
//       break;
//     default:
//       break;
//   }
//   return newState;
// }
