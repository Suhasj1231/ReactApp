import React from 'react';
import useWindowSize from './useWindowSize';

const Window_size = () => {
  const [width, height] = useWindowSize();

  return (
    <div className='w-1/2 h-24 mx-auto my-4 p-4 bg-pink-300'>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
};

export default Window_size;
