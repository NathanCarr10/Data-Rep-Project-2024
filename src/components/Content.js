import React from 'react';

/**
 * Content component is a simple functional component that displays
 * a "Hello World!" message along with the current time.
 */

const Content = () => {
  return (
    <div>
     {/* Main heading that displays a "Hello World!" message */}
      <h1>Hello World!</h1>
       {/* Displaying the current time 
          using JavaScript's Date object and toLocaleTimeString method */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;