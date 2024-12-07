import React from 'react';

/**
 * Content component is a simple functional component that displays
 * a "Welcome To Your Video Games Homepage!" message along with the current time.
 */

const Content = () => {
  return (
    <div>
     {/* Main heading that displays a "Hello World!" message */}
      <h1>Welcome To Your Video Games Homepage! </h1>
      <div>
        This is a React app that for all your favourite video games,
        add to your wishlist or keep track of all games you've completed!
      </div>
       {/* Displaying the current time 
          using JavaScript's Date object and toLocaleTimeString method */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;