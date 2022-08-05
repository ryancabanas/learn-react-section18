import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isCounterHidden: false,
};

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.isCounterHidden = !state.isCounterHidden;
    },
  },
});

const counterReducer = (prevState = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...prevState,
      counter: prevState.counter + 1,
    };
  }

  if (action.type === 'INCREASE') {
    return {
      ...prevState,
      counter: prevState.counter + action.amount,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      ...prevState,
      counter: prevState.counter - 1,
    };
  }

  if (action.type === 'TOGGLE_COUNTER') {
    return {
      ...prevState,
      isCounterHidden: !prevState.isCounterHidden,
    };
  }

  return prevState;
};

const store = createStore(counterReducer);

export default store;
