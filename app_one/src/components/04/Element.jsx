import React from 'react';

const Element = ({ name, children }) => {
  const handleClick = (event) => {
    const hierarchy = [];
    let currentElement = event.target;

    // Traverse up the DOM to gather element names
    while (currentElement ) {
      hierarchy.push(currentElement.nodeName);
      currentElement = currentElement.parentElement;
    }

    // Reverse the hierarchy array for correct order
    hierarchy.reverse();

    const elementHierarchy = hierarchy.join(' > ');
    console.log(`Clicked Element Hierarchy: ${elementHierarchy}`);
  };

  return (
    <div onClick={handleClick}>
      {name}
      {children}
    </div>
  );
};

export default Element;
