import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isCounterHidden: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggleCounter: (state) => {
      state.isCounterHidden = !state.isCounterHidden;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
