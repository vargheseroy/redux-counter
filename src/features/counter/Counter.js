import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  decrementByAmount,
  decrementAsync
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [decrementAmount, setDecrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

        <input
          className={styles.textbox}
          aria-label="Set decrement amount"
          value={decrementAmount}
          onChange={e => setDecrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className={styles.button}
          onClick={() =>
            dispatch(decrementByAmount(Number(decrementAmount) || 0))
          }
        >
          Subtract Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(Number(decrementAmount) || 0))}
        >
          Subtract Async
        </button>

      </div>
    </div>
  );
}
