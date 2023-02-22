import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByTen,
} from '../redux/actions/counterActions';

const Counter = () => {
  const counter = useSelector(state => state.counterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByTen())}>by ten</button>
    </div>
  );
};

export default Counter;
