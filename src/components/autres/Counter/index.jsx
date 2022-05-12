import React from 'react';
import { useState } from 'react';
import BigNumber from '../BigNumber';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter" style={{ textAlign: 'center'}}>
      <h3> 1 : The counter</h3>
      <button style={{ margin: '5px'}} className='btn btn-light' onClick={decrement}>-</button>
      <button style={{ margin: '5px'}} className='btn btn-light' onClick={increment}>+</button>
      <p>Counting: {count}</p>
      <BigNumber data={count}/>
    </div>
  );
};

export default Counter;