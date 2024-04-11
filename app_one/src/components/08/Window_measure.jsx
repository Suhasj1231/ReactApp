import React, { useEffect, useRef } from 'react';

function Window_measure() {
  const boxRef = useRef(null); // Store a reference to the box element

  useEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth; // Get the width of the box
      const height = boxRef.current.clientHeight; // Get the height of the box
      console.log(`Box dimensions: width=${width}, height=${height}`);
    }
  }, [boxRef]); // Run only when boxRef changes

  return (
    <div ref={boxRef} className='w-1/2 h-24 bg-blue-800 text-white p-4 my-4 mx-auto'>
      <div>
        
        This is a measured box {boxRef.current}
        </div>
    </div>
  );
}

export default Window_measure;
