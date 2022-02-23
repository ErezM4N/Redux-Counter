import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';

import classes from './Counter.module.scss';


//import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(1);
  const counter = useSelector((state: any) => state.counter);
  const show = useSelector((state: any) => state.showCounter);



  const incrementHandler = () => {
    //dispatch({ type: INCREMENT })
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: increment })
    dispatch(counterActions.increase(increment))
   
  };
  // const increaseHandler = (val: number) => {
  //   dispatch({ type: 'increase', amount: val })
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const updateInputValue = (evt: any) => {
    setIncrement(Number(evt.target.value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <div>
          <button onClick={increaseHandler}>Increase by .. </button>
          <input onChange={evt => updateInputValue(evt)} type="number" name="" id="" />
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
