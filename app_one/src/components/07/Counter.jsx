import React from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const [count, increment, decrement] = useCounter(0);

  return (
    <div className='w-1/2  mx-auto bg-orange-300 p-4 my-4'  >
      <h2>Count: {count}</h2>
      <button className='border border-black border-2 p-2 ' onClick={increment}>Increment</button>
      <br />
      <button className='border border-black border-2 p-2' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
