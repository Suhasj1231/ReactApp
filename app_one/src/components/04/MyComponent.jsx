import React from 'react';

import Element from './Element';

const MyComponent = () => {
    return (
      <div className='w-1/2 h-24 bg-slate-400 mx-auto p-4 ' >
        <Element name="GrandParent">
          <Element name="Parent">
            <Element name="Child"> Click Me!</Element>
          </Element>
        </Element>
      </div>
    );
  };

  export default MyComponent;