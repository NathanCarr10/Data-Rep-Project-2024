import React from 'react';

/**
 * Content component is a simple functional component that displays
 * a "Welcome To Your Video Games Homepage!" message along with the current time.
 */

const Content = () => {
  //Function to have a Super Mario background image on Content page
  const heroImage ={
    position: 'relative',
    width: '100%',
    height: '100vh', //Full viewport height
    //importing image from url
    backgroundImage: 'url("https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9632107/mario.jpg?quality=90&strip=all&crop=21.764705882353%2C0%2C56.470588235294%2C100&w=1080")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', //Center the image
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    color: '#fff',
    textAlign: 'center',
    overflow: 'hidden'
  };

  const overlayStyle ={
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)' //Semi-Transparent black overlay
  };

  const contentStyle ={
    position: 'relative',
    zIndex: 1, // Ensure text is above overlay
    padding: '0 20px'
  };
  return (
   <div style={heroImage}>
    <div style={overlayStyle}></div>
   <div style ={contentStyle}> 
    <h1>Welcome To Your Gaming Hub</h1>
    <p>Track your wishlist, discover top-rated games, and revisit your completed adventures!</p>
    </div>
   </div>
  );
}

export default Content;