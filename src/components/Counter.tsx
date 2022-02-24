import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.counter);
  const show = useSelector((state: any) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const increaseHandler = (val: number) => {
    dispatch(counterActions.increase(val))
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(10)}>Increase by 10 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
