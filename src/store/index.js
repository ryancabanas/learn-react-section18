import { createStore } from 'redux';

const defaultState = {
  counter: 0,
  isCounterHidden: false,
};

const counterReducer = (prevState = defaultState, action) => {
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
