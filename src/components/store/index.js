import { createStore } from 'redux';

const defaultState = {
  counter: 0,
};

const counterReducer = (prevState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: prevState.counter + 1,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: prevState.counter - 1,
    };
  }

  return prevState;
};

const store = createStore(counterReducer);

export default store;
