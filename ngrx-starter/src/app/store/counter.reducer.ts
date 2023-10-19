import { Action, createReducer, on } from '@ngrx/store';
// import { CounterActions, INCREMENT } from './counter.actions';
import { increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
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
