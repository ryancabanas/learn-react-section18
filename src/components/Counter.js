import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterHidden = useSelector((state) => state.isCounterHidden);

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!isCounterHidden && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
