import React, { useCallback } from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../stores';


const Counter = () => {
  const { counter } = useStore();

  console.log(counter.number);

  const increase = useCallback(() => counter.increase(), [counter]);
  const decrease = useCallback(() => counter.decrease(), [counter]);

  return useObserver(() => (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ));
};

export default Counter;
